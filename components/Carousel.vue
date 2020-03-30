<template>
  <div id="carousel-wrapper">
    <p class="has-text-grey scroll-indicator">
      (Hover your cursor above the images for info and scroll vertically for more projects)
    </p>
    <div class="carousel-container container">
      <div class="scroll-arrow scroll-arrow-left" :class="{'active': leftArrowActive}" @click="leftClick">
        <span class="icon is-large">
          <i class="mdi mdi-chevron-left" />
        </span>
      </div>
      <div class="scroll-arrow scroll-arrow-right" :class="{'active': rightArrowActive}" @click="rightClick">
        <span class="icon is-large">
          <i class="mdi mdi-chevron-right" />
        </span>
      </div>
      <div ref="carousel" class="columns">
        <div v-for="(band, idx) in bands" :key="idx" class="band-card-container column is-4">
          <div class="band-card" :style="('background-image: url(' + band.image + ');') + (band.cover ? 'background-size: cover;' : '')">
            <div class="card-content">
              <h2 class="subtitle is-5 has-text-white">
                {{ band.name }}
              </h2>
              <p class="content">
                {{ band.description }}
              </p>
              <a v-if="band.link !== undefined" class="content button is-outlined is-danger" :href="band.link" target="_blank">
                Read about {{ band.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    bands: {
      type: Array,
      required: true
    }
  },
  data () {
    return ({
      leftArrowActive: false,
      rightArrowActive: true
    })
  },
  mounted () {
    // @ts-ignore
    this.$refs.carousel.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event: { target: Element }) : void {
      if (event.target !== null) {
        const scrollWidth = event.target.scrollWidth
        const scrollLeft = event.target.scrollLeft
        const clientWidth = event.target.clientWidth

        if (scrollLeft > 20) {
          this.leftArrowActive = true
        } else {
          this.leftArrowActive = false
        }

        if ((scrollWidth - clientWidth - scrollLeft) > 20) {
          this.rightArrowActive = true
        } else {
          this.rightArrowActive = false
        }
      }
    },
    leftClick (event: {target: Element}) : void {
      const carousel = this.$refs.carousel
      // @ts-ignore
      const scrollLeft = carousel.scrollLeft

      // @ts-ignore
      carousel.scroll({ left: scrollLeft - 500, behavior: 'smooth' })
    },
    rightClick (event: {target: Element}) : void {
      const carousel = this.$refs.carousel
      // @ts-ignore
      const scrollLeft = carousel.scrollLeft

      // @ts-ignore
      carousel.scroll({ left: scrollLeft + 500, behavior: 'smooth' })
    }
  }
})
</script>

<style lang="scss" scoped>
#carousel-wrapper {
    position: relative;
}

.columns {
  @media screen and (min-width: 769px)  {
    overflow-x: scroll;
    position: relative;
  }
}

.column {
  max-width: 100% !important;
}

.band-card-container {
  padding: 1rem;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}

.carousel-container {
  position: relative;
  // contain: paint;
}

.scroll-arrow {
  display: none;

  @include desktop() {
    font-size: 3rem;
    color: white;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    min-height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    transition: opacity ease-in 0.2s;

    span {
      border-radius: 50%;
      background-color: rgba(0,0,0,0.8) !important;
    }

    &.active {
      opacity: 1;
    }

    &.scroll-arrow-left {
      left: -2rem;
    }
    &.scroll-arrow-right {
      right: -2rem;
    }

    &:hover {
        cursor: pointer;
    }
  }
}

.scroll-indicator {
  display: none;
  @include desktop {
    display: block;
    text-align: center;
  }
}

.band-card {
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  color: white;
  background-color: #0d0d0d;
  background-position: center;
  background-repeat: no-repeat;
  // background-origin: padding-box;
  background-size: contain;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: "";
    border-radius: 10px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    transition: all linear 0.2s;

    @include desktop() {
      background-color: transparent;
    }
  }

  .card-content {
    position: relative;
    height: 100%;

    @include desktop() {
      transform: translateY(100%);
      transition: all linear 0.2s;
    }
  }

  @include desktop() {
    &:hover {
      .card-content {
        transform: translateY(0);
      }

      &::before {
        background-color: rgba(0,0,0,0.7);
      }
    }
  }
}
</style>

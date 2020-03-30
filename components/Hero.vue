<template>
  <section class="hero" :style="styleObject">
    <div class="hero-body">
      <div class="container animated" :class="{ 'loaded': isLoaded }">
        <div>
          <slot name="first" />
        </div>
        <div class="animated content" :class="{ 'loaded': isLoaded }">
          <slot name="second" />
        </div>
      </div>
    </div>
    <a v-if="arrow" class="arrow-down" :class="{ 'loaded': isLoaded }" href="#first-section" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Hero',
  props: {
    arrow: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: require('~/assets/img/svg/frontpage-bg-graphic.svg')
    },
    backgroundPosition: {
      type: String,
      default: undefined
    }
  },
  data () {
    return ({
      isLoaded: false
    })
  },
  computed: {
    bgUrl () {
      if (this.background === undefined) { return }

      return ('url(' + this.background + ')')
    },
    styleObject () {
      let obj: {'background-image': any, 'background-position'?: any} = { 'background-image': this.bgUrl }

      if (this.backgroundPosition !== undefined) {
        obj = { ...obj, 'background-position': this.backgroundPosition }
      }

      return obj
    }
  },
  mounted () {
    // @ts-ignore
    this.isLoaded = true
  }
})
</script>

<style lang="scss" scoped>
.hero {
  background-size: cover;
  // background-attachment: fixed;
  background-color: red;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
  }
}

.hero-body .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 0.5s ease-in-out slidein-bottom;
  animation-fill-mode: both;
  animation-play-state: paused;

  @include desktop {
    &.loaded {
      animation-play-state: running;
    }

    img {
      margin: auto;

    }
  }
}

div.content {

  @include desktop {
    &.animated {
      // opacity: 0;
      animation: 0.5s ease-in-out fadein;
      animation-fill-mode: both;
      animation-play-state: paused;
      animation-delay: 0.5s;

      &.loaded {
        animation-play-state: running;
      }
    }
  }
  // text-align: justify;
  padding-top: 2rem;

  @media screen and (min-width: $desktop){
    width: 60vw;
  }

  // &.loaded {
  //   opacity: 1;
  // }
}

.animated {
  transition: transform ease-in-out 0.5s, opacity 0.5s linear 0.5s;
}

.arrow-down {
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  border-bottom: 4px solid;
  border-right: 4px solid;
  border-color: rgba($white, 0.3);
  position: absolute;
  box-shadow: 3px 3px 2px rgba(0,0,0,0.1);
  left: 50%;
  bottom: 1rem;
  transform: rotate(45deg) translateX(-50%);
  z-index: 10;
  // opacity: 0;
  // transition: opacity 0.5s linear 1.5s;

    animation-name: bounce;
    animation-duration: 2s;
    animation-delay: 0;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-play-state: paused;

  @include desktop {
    bottom: 4rem;
    // animation: 0.5s ease-in-out slidein-bottom;
    animation-name: fadein, bounce;
    animation-duration: 0.5s, 2s;
    animation-delay: 3s, 0;
    animation-timing-function: ease-in-out, ease-out;
    animation-iteration-count: 1, infinite;
    animation-fill-mode: both;
    animation-play-state: paused;
  }

  &.loaded {
    animation-play-state: running;
    // opacity: 1;
    // animation: 2s ease-out infinite bounce;
  }
}
</style>

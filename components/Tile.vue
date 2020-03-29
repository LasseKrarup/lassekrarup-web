<template>
  <div class="tile is-parent" :class="tile.class">
    <a
      v-if="tile.link"
      class="tile is-child"
      :style="styleObject"
      :href="tile.link"
      target="_blank"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
    >
      <!-- <div id="description">
        <strong> {{ tile.name }}</strong>
        <p>{{ tile.description }}</p>
      </div> -->
    </a>

    <div
      v-else
      class="tile is-child"
      :style="styleObject"
      :href="tile.link"
      target="_blank"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
    >
      <!-- <div id="description">
        <strong> {{ tile.name }}</strong>
        <p>{{ tile.description }}</p>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    tile: {
      type: Object,
      required: true
    }
  },
  data () {
    return (
      {
        isHovered: false
      }
    )
  },
  computed: {
    styleObject () {
      return (
        {
          // @ts-ignore
          'background-image': `url(${this.tile.image})`,
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center'
        }
      )
    }
  },
  methods: {
    handleMouseenter (event: Event) : void {
      this.isHovered = true
      const elements: any = document.querySelectorAll('.tile.is-child')

      if (!elements) { return }

      elements.forEach((element: Element) => {
        if (element !== event.target) {
          element.classList.add('blur')
        }
      })
    },
    handleMouseleave (event: Event) : void {
      this.isHovered = false
      const elements: any = document.querySelectorAll('.tile.is-child')

      if (!elements) { return }

      elements.forEach((element: Element) => {
        element.classList.remove('blur')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.tile.is-parent {
    @media screen and (max-width: 1023px) {
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
    }

    min-height: 300px;

    @include desktop {
        min-height: 400px;
    }
}

.tile.is-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px !important;
    transition: filter linear 0.4s;
}

// #description {
//     color: white !important;
//     background-color: rgba(black, 0.7);
//     padding: 2rem 3rem;
// }

.blur {
    filter: blur(5px);
}
</style>

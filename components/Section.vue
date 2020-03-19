<template>
  <section class="section" :style="styleObject" :class="overlayColor === undefined ? '' : 'overlay'">
    <div ref="wrapper" class="wrapper" :style="'background-color: ' + overlayColor" />
    <div class="container" :class=" { 'is-intersected': isIntersected} ">
      <div class="columns" :class="{ 'is-vcentered': vcenter }">
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Section',
  props: {
    background: {
      type: String,
      default: undefined
    },
    vcenter: {
      type: Boolean,
      default: false
    },
    overlayColor: {
      type: String,
      default: undefined
    }
  },
  data () {
    return ({
      isIntersected: false
    })
  },
  computed: {
    styleObject () {
      if (this.background === undefined) {
        return null
      } else {
        return ({
          backgroundImage: 'url(' + this.background + ')',
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        })
      }
    }
  },
  mounted () {
    const options = {
      threshold: 0.5
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        // @ts-ignore
        this.isIntersected = true
      }
    }, options)

    // @ts-ignore
    observer.observe(this.$refs.wrapper)
  }
})
</script>

<style lang="scss" scoped>
.container {
    display: none;

    &.is-intersected {
        display: block;
    }
}

.section {
  min-height: 30vh;
  position: relative;
}

section.is-primary {
  background-color: $primary;
  color: $primary-invert;
}

.wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color is added in-line
}
</style>

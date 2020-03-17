<template>
  <section class="section">
    <div ref="wrapper" />
    <div class="container" :class=" { 'is-intersected': isIntersected} ">
      <div class="columns">
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Section',
  data () {
    return ({
      isIntersected: false
    })
  },
  mounted () {
    const options = {
      threshold: 0.5
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        this.isIntersected = true
      }
    }, options)

    // @ts-ignore
    observer.observe(this.$refs.wrapper)
  }
})
</script>

<style lang="scss">
.container {
    display: none;

    &.is-intersected {
        display: block;
    }
}

.section {
  min-height: 20vh;
}

section.is-primary {
  background-color: $primary;
  color: $primary-invert;

  h1.title {
    color: $primary-invert;
  }
}
</style>

<template>
  <div class="column" :style="style" :class="classObject">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Column',
  props: {
    direction: {
      type: String,
      default: 'left'
    },
    delay: {
      type: String,
      default: '0'
    }
  },
  computed: {
    style () {
      if (typeof (this.delay) !== 'string') {
        return '0s'
      } else {
        const str = this.delay.split('s')
        return ('animation-delay: ' + str[0] + 's')
      }
    },
    classObject () {
      if (this.direction === 'left' || this.direction === 'right' || this.direction === 'top' || this.direction === 'bottom') {
        return (['animated-' + this.direction, 'animated'])
      } else { return undefined }
    }
  }
})
</script>

<style lang="scss" scoped>
.column {
  padding: 1.5rem!important;
}

.animated-left {
    animation: 1s ease-out both fadein-left;
}
.animated-right {
    animation: 1s ease-out both fadein-right;
}
.animated-top {
    animation: 1s ease-out both fadein-top;
}
.animated-bottom {
    animation: 1s ease-out both fadein-bottom;
}
</style>

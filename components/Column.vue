<template>
  <div class="column animated" :style="style" :class="'animated-' + direction">
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
    }
  }
})
</script>

<style lang="scss" scoped>
.animated {
  opacity: 0;
}
.animated-left {
    animation: 1s ease-out forwards fadein-left;
}
.animated-right {
    animation: 1s ease-out forwards fadein-right;
}
.animated-top {
    animation: 1s ease-out forwards fadein-top;
}
.animated-bottom {
    animation: 1s ease-out forwards fadein-bottom;
}
</style>

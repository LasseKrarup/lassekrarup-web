<template>
  <div class="column" :class="'animated-' + direction">
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
    }
  }
})
</script>

<style lang="scss">
.animated-left {
    animation: 2s ease-out fadein-left;
}
.animated-right {
    animation: 2s ease-out fadein-right;
}
.animated-top {
    animation: 2s ease-out fadein-top;
}
.animated-bottom {
    animation: 2s ease-out fadein-bottom;
}
</style>

<template>
  <div />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      title: 'Web Design'
    }
  },
  head () {
    const title:string = this.title
    return ({
      title
    })
  }
})
</script>

<style lang="scss">
</style>

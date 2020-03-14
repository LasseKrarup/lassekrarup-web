<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data () {
    return ({
      title: 'Drummer, musician, web designer'
    })
  }
}
</script>

<style lang="scss">
</style>

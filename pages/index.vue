<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-vcentered is-flex">
        <img src="~/assets/img/svg/LK_logo_white_text.svg" width="800px">
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

<style lang="scss" scoped>
.hero-body .container img{
  margin: auto;
}
</style>

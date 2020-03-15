<template>
  <Hero class="is-fullheight-with-navbar is-primary">
    <template #first>
      <img src="~/assets/img/svg/LK_logo_white_text.svg" width="800px">
    </template>

    <template #second>
      <h1 class="title">
        {{ title }}
      </h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A impedit, voluptates provident ad eveniet rerum recusandae ducimus porro, quibusdam nesciunt nam quam. Aliquam itaque vel nobis quaerat blanditiis impedit quis dolore voluptas quas numquam iusto iure dolores, aspernatur, commodi explicabo. Dolorem sint impedit laudantium optio labore sit numquam corporis ducimus?
      </p>
    </template>
  </Hero>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/Hero.vue'

export default Vue.extend({

  components: {
    Hero
  },
  data () {
    return ({
      title: 'Drummer, musician, web designer'
    })
  },
  head () {
    const title:string = this.title
    return ({
      titleTemplate: 'Lasse Krarup - %s',
      title
    })
  }
})
</script>

<style lang="scss" scoped>
</style>

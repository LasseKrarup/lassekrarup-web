<template>
  <div>
    <Hero class="is-medium is-primary" :background="require('~/assets/img/svg/alt-bg-graphic.svg')">
      <template #second>
        <h1 class="title is-1">
          {{ title }}
        </h1>

        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima sunt voluptatum necessitatibus dolore fugiat, obcaecati amet aliquam veniam delectus natus libero cupiditate, eaque modi aut sed nemo pariatur dignissimos.
        </p>
      </template>
    </Hero>

    <Section style="background-color: #241e20" class="has-text-white">
      <Column class="center-content" direction="none">
        <img :src="images[0]" alt="lightbulb" width="60%">
      </Column>
      <Column class="center-content">
        <div class="content">
          <h2 class="subtitle is-3 has-text-white">
            Lessons
          </h2>

          <p class="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet nobis, amet rerum facere quam itaque quae quasi fugit est reprehenderit. Vel, aliquam, eligendi dignissimos molestiae, expedita pariatur nostrum unde deserunt doloremque quae laudantium ea minus sed quisquam ipsum fuga non fugit illum omnis quaerat delectus maxime dolore excepturi ab? Cum.
          </p>
        </div>
      </Column>
    </Section>

    <Section class="is-primary">
      <Column>
        <h1 class="title">
          Testy titleface
        </h1>
        <p class="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet nobis, amet rerum facere quam itaque quae quasi fugit est reprehenderit. Vel, aliquam, eligendi dignissimos molestiae, expedita pariatur nostrum unde deserunt doloremque quae laudantium ea minus sed quisquam ipsum fuga non fugit illum omnis quaerat delectus maxime dolore excepturi ab? Cum.
        </p>
      </Column>
      <Column />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/Hero.vue'
import Section from '~/components/Section.vue'
import Column from '~/components/Column.vue'

export default Vue.extend({

  components: {
    Hero,
    Section,
    Column
  },
  data () {
    return ({
      title: 'I teach, I gig, and I record',
      images: [require('~/assets/img/close-up-photo-ofg-light-bulb-716398.jpg')]
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
.center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>

<template>
  <div>
    <Hero class="is-large is-primary" :background="require('~/assets/img/svg/alt-bg-graphic.svg')">
      <template #second>
        <h1 class="title is-1">
          {{ title }}
        </h1>

        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima sunt voluptatum necessitatibus dolore fugiat, obcaecati amet aliquam veniam delectus natus libero cupiditate, eaque modi aut sed nemo pariatur dignissimos.
        </p>
      </template>
    </Hero>

    <Section>
      <Column class="center-content">
        <h2 class="subtitle is-3">
          Projects and bands
        </h2>
        <h2 class="subtitle is-5">
          The stuff that I tour and record with
        </h2>
      </Column>
    </Section>

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
            If you like my stuff, don't hesitate to contact me for lessons. I do lessons in both Aalborg and Aarhus (DK) as well as video lessons online.
          </p>
          <p class="content">
            I like to focus on <i>musicality</i> above all. All the technique and speed in the world is useless if you don't know how to play music. Of course I teach technique as well, but there's always a focus towards using technical skills musically.
          </p>
          <p class="content">
            If you wan't to be the most hardcore gospel chopper known to man, then maybe I'm not your guy. But if you want to be the drummer that everybody wants to <b>play with</b> - hit me up.
          </p>
        </div>
      </Column>
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

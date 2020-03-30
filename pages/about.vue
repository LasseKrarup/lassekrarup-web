<template>
  <div>
    <Hero class="is-large is-primary" :background="require('~/assets/img/svg/alt-bg-graphic-4.svg')">
      <template #second>
        <h1 class="title is-1">
          {{ title }}
        </h1>
        <h2 class="subtitle is-3">
          ...but I design websites and logos&nbsp;too
        </h2>
      </template>
    </Hero>

    <Section>
      <Column>
        <h2 class="title is-3">
          I play drums and design&nbsp;websites
        </h2>
        <h3 class="subtitle is-5">
          and I'm also both friendly and&nbsp;professional
        </h3>

        <p class="content">
          My name is Lasse Herold Krarup, and I'm {{ age }} years old. I live in Aarhus, Denmark, and I study at the Royal Academy of Music, Aalborg.
        </p>

        <p class="content">
          I've been playing music since I was 10 years old. I've been hooked on drums since before I could play them. What fascinates me about drums is the fact that you can create music and melodies with something that doesn't necessarily involve perfectly pitched notes.
        </p>

        <p class="content">
          I started coding and making websites when I was in elementary school. My interest in the technical computer stuff and electronics is probably what lead me to start studying for a bachelor's degree in electronical engineering, which I studied for a couple of years before starting at the music academy.
        </p>

        <p class="content">
          If you want to know more about me, feel free to contact me or visit some of my social media pages.
        </p>

        <nuxt-link class="button is-outlined is-danger is-medium" to="/contact">
          Find me on social media
        </nuxt-link>
        <nuxt-link class="button is-outlined is-success is-medium" to="/contact">
          Contact me
        </nuxt-link>
      </Column>

      <Column>
        <img :src="images[0]" alt="Portrait of me">
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
    Hero, Section, Column
  },
  data () {
    return {
      title: "My name is Lasse, and I'm a\xA0musician",
      images: [require('~/assets/img/lk-portrait.jpg')]
    }
  },
  computed: {
    age () {
      const todayDate = new Date()
      const todayYear = todayDate.getFullYear()
      const todayMonth = todayDate.getMonth()
      const todayDay = todayDate.getDate()
      const birthYear = 1995
      const birthMonth = 10
      const birthDay = 14
      let age = todayYear - birthYear

      if (todayMonth < (birthMonth - 1)) {
        age--
      }
      if (((birthMonth - 1) === todayMonth) && (todayDay < birthDay)) {
        age--
      }
      return age
    }
  },
  head () {
    const title:string = this.title
    return ({
      title,
      meta: [
        {
          hid: 'description', name: 'description', content: "Hi, I'm Lasse. I play music and I design websites. Read about me, hear my music and see my design work."
        },
        {
          hid: 'og:title', name: 'og:title', property: 'og:title', content: title
        },
        {
          hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://www.lassekrarup.com/LK-website-screenshot.jpg'
        }
      ]
    })
  }
})
</script>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 1.5rem;
}

i {
  font-size: 2rem;
  margin-left: 2rem;
  margin-right: 1rem;
}
</style>

<template>
  <div>
    <Hero class="is-large is-primary" :background="require('~/assets/img/svg/alt-bg-graphic-2.svg')" background-position="bottom">
      <template #second>
        <h1 class="title is-1">
          {{ title }}
        </h1>
        <h2 class="subtitle is-3">
          ...and I design websites and graphics for musicians and&nbsp;stuff
        </h2>
      </template>
    </Hero>

    <Section>
      <Column class="center-content has-text-centered">
        <h2 class="title is-3">
          Stuff I designed
        </h2>
        <h3 class="subtitle is-5">
          Go ahead and check it out - most of it is&nbsp;online!
        </h3>

        <Tiles :tiles="websites" />
      </Column>
    </Section>

    <Section :background="images[0]" class="has-text-white is-flex" overlay-color="rgba(0,0,0, 0.3)">
      <Column>
        <h2 class="is-3 title has-text-white">
          Web design and graphics design
        </h2>
        <h3 class="is-5 subtitle has-text-white">
          I'll help you make a good first impression
        </h3>
        <p class="content">
          Hey guys, welcome to {{ (new Date).getFullYear() }}. These are modern times - flow TV is dead, children try to swipe on any surface, and also, it's pretty important to have a nice online presence. If you want customers - be that an audience for your music or a clientel for your business - you just can't have an ugly generic looking website that you made on Wix.
        </p>

        <p class="content">
          I'll give you a modern website with an intuitive user interface that will draw attention to your products. I also design logos, business cards and other graphical stuff. I identify the defining characteristics of your brand and make sure that other people see them.
        </p>
      </Column>
      <Column direction="bottom">
        <img src="~/assets/img/inkscape-work-screenshot.jpg" width="100%" height="auto" alt="Graphics design process 2">
      </Column>
    </Section>
  </div>
</template>

<script lang="ts">import Vue from 'vue'
import Hero from '~/components/Hero.vue'
import Section from '~/components/Section.vue'
import Column from '~/components/Column.vue'
import Tiles from '~/components/Tiles.vue'

export default Vue.extend({
  components: {
    Hero,
    Section,
    Column,
    Tiles
  },
  data () {
    return {
      title: "I'm a web\xA0designer",
      images: [require('~/assets/img/svg/gradient-backdrop.svg')],
      websites: [
        {
          name: 'This one - obviously...',
          description: 'This is my home page. Which I made.',
          link: 'http://www.lassekrarup.com',
          image: require('~/assets/img/LK-website-screenshot.jpg'),
          class: 'is-4'
        },
        {
          name: 'In Caravans',
          description: 'Energetic indie psych/rock',
          link: 'http://www.incaravans.com',
          image: require('~/assets/img/InCaravans-website-screenshot.jpg'),
          class: 'is-8'
        },
        {
          name: 'Modulet',
          description: 'Cover band from Aarhus, DK',
          link: 'http://www.modulet.dk',
          image: require('~/assets/img/Modulet-website-screenshot.jpg'),
          class: 'is-6'
        },
        {
          name: 'Anders Boye Knudsen',
          description: 'Bass player from Aalborg, DK',
          image: require('~/assets/img/ABK-website-screenshot.jpg'),
          class: 'is-6'
        }
      ]
    }
  },
  head () {
    const title:string = this.title
    return ({
      title,
      meta: [
        {
          hid: 'description', name: 'description', content: "I've designed many websites, especially for musicians and bands. I do graphical design as well. Contact me for an offer or a consult."
        },
        {
          hid: 'og:title', name: 'og:title', property: 'og:title', content: title
        },
        {
          hid: 'og:image', name: 'og:image', property: 'og:image', content: 'http://www.lassekrarup.com/LK-website-screenshot.jpg'
        }
      ]
    })
  }
})
</script>

<style lang="scss">
.center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>

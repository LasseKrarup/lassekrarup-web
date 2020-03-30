<template>
  <div>
    <Hero class="is-large is-primary" :background="require('~/assets/img/svg/alt-bg-graphic.svg')">
      <template #second>
        <h1 class="title is-1">
          {{ title }}
        </h1>
        <h2 class="subtitle is-3">
          ...drummer, composer, session musician and&nbsp;teacher
        </h2>
      </template>
    </Hero>

    <Section>
      <Column class="has-text-centered">
        <h2 class="title is-3">
          Projects and bands
        </h2>
        <h2 class="subtitle is-5">
          The stuff that I tour and record&nbsp;with
        </h2>
        <Carousel :bands="bands" />
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
import Carousel from '~/components/Carousel.vue'

export default Vue.extend({

  components: {
    Hero,
    Section,
    Column,
    Carousel
  },
  data () {
    return ({
      title: "I'm a musician",
      images: [require('~/assets/img/close-up-photo-ofg-light-bulb-716398.jpg')],
      rightArrowActive: true,
      leftArrowActive: false,
      bands: [
        {
          name: 'In Caravans',
          description: 'A concert with In Caravans is like a 200 MPH road trip through the desert in a truck without brakes, passing through eerie and mysterious sceneries. Atmospheric, yet straight to the point, In Caravans alternates between fleeting emotion and no-nonsense indie rock.',
          link: 'http://www.incaravans.com',
          image: require('~/assets/img/InCaravansHeader-min.jpg')
        },
        {
          name: 'MARCE',
          description: 'With inspiration from both the new Indie scene and the old folk tradition, they create a separate and unique univers. MARCE are not afraid to take their time in the music, but their refined and thourough sound keeps the audience engaged.',
          image: require('~/assets/img/svg/MARCE.svg')
        },
        {
          name: 'Spraglgevær',
          description: 'The sound of Spraglgevær is often melancholic yet energetic with inspiration from great Danish songwriters such as Peter Sommer and Søren Huss. In the lyrics Spraglgevær seek to explore human interaction and why we often miscommunicate. One can expect a concert with plenty of energy, presence and recklessness.',
          image: require('~/assets/img/spraglgevaer.jpg'),
          cover: true,
          link: 'https://www.instagram.com/spraglgevaer.music/'
        },
        {
          name: 'North Avenue',
          description: "North Avenue is one of Denmark's greatest cover bands. With references from both the small and large stages and all kinds of events, you'll never go wrong with North Avenue.",
          link: 'https://www.northavenue.dk',
          image: require('~/assets/img/NA-img-min.jpg'),
          cover: true
        },
        {
          name: 'PartyModulet',
          description: 'PartyModulet is the perfect replacement for a DJ. We play all the pop hits that DJ Spotify knows - also the new ones. With a repertoire filled with fresh pop music, we deliver a full fledged party experience.',
          image: require('~/assets/img/modulet-img.jpg'),
          link: 'http://www.modulet.dk/Party/',
          cover: true
        }
      ]
    })
  },
  head () {
    const title:string = this.title
    return ({
      title,
      meta: [
        {
          hid: 'description', name: 'description', content: 'Read all about my musical projects, like In Caravans, MARCE, Spraglgevær and others. You can also read about lessons with me.'
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
.center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>

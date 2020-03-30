<template>
  <div>
    <Hero class="is-fullheight is-primary" :arrow="true" :background="images[1]">
      <template #first>
        <img src="~/assets/img/svg/LK_logo_white_text.svg" width="800px">
      </template>

      <template #second>
        <h1 class="title is-1 has-text-centered">
          {{ title }}
        </h1>

        <h2 class="subtitle is-3 has-text-centered">
          I'm a musician and a web&nbsp;designer
        </h2>

        <div class="columns content is-vcentered">
          <div class="column has-text-centered">
            <nuxt-link class="button is-large  is-danger is-outlined" to="/music">
              Hear my music
            </nuxt-link>
          </div>
          <div class="column has-text-centered">
            <nuxt-link class="button is-large is-success is-outlined" to="/webdesign">
              See my design work
            </nuxt-link>
          </div>
        </div>
      </template>
    </Hero>

    <Section id="first-section">
      <Column direction="left">
        <h2 class="subtitle is-3">
          Drummer and session musician
        </h2>
        <p class="content">
          I've been playing drums since I was 10 years old and along the way I have picked up skills and experiences in drumming as well as composition, band leading, studio recording and gigging. I study at the Royal Academy of Music, Aalborg, and I play more than 40 concerts a year with my different bands and projects.
        </p>

        <p class="content">
          I'm a gear nerd and I'm pretty tech savvy - I used to study electronical engineering, and I build music related tech as well. Amplifiers, speakers, effect pedals... <br>
          I do tracking, studio engineering and mixing as well.
        </p>

        <p class="content">
          <nuxt-link class="button is-outlined is-medium is-danger" to="/music">
            Listen to my music
          </nuxt-link>
        </p>
      </Column>
      <Column
        delay="0.5s"
        direction="right"
      >
        <img src="~assets/img/train-lhk-min.jpg" alt="Lasse Krarup at Train in Aarhus" style="margin-top: 10px">
      </column>
    </Section>

    <Section
      class="is-primary"
      :background="images[0]"
      style="background-position: center;"
      wrap-reverse
      vcenter
      overlay-color="rgba(0,0,0,0.1)"
    >
      <Column direction="bottom" delay="0.8s" class="has-text-centered">
        <nuxt-link class="button is-outlined is-large is-success" to="/webdesign">
          See my work here
        </nuxt-link>
      </Column>
      <Column direction="bottom">
        <h2 class="subtitle is-3 has-text-white">
          Websites and design
        </h2>
        <p class="content">
          My web design speciality lies in building web pages and graphical design for musicians and bands. I've made tons of web pages for musicians, and I've - obviously - done the websites for the bands I play in myself. I know what aesthetics work well for musicians, and I can channel your music to a fitting design.
        </p>

        <p class="content">
          Although I've done most of my work with musicians, I do websites for all sorts of businesses and companies. I do both WordPress-based sites, where you can edit the content yoursef, or custom websites coded from scratch - like this one.
        </p>
      </column>
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
      title: 'Become\xA0seen. And\xA0heard.',
      images: [
        require('~/assets/img/svg/swatch.svg'),
        require('~/assets/img/svg/frontpage-bg-graphic.svg')
      ],
      musicIcons: [
        {
          name: 'music-circle-outline',
          description: 'Lessons with an emphasis on musicality, tailored to your individual needs'
        },
        {
          name: 'music-clef-treble',
          description: 'Rhythm training, drum technique and being the drummer people want to actually play with'
        },
        {
          name: 'playlist-check',
          description: "We'll create an effective and fun practice scheme to bolster your skills"
        }
      ],
      designIcons: [
        {
          name: 'music-circle-outline',
          description: 'Lessons with an emphasis on musicality, tailored to your individual needs'
        },
        {
          name: 'music-clef-treble',
          description: 'Rhythm training, drum technique and being the drummer people want to actually play with'
        },
        {
          name: 'playlist-check',
          description: "We'll create an effective and fun practice scheme to bolster your skills"
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
$icon-margin: 2rem;

ul {
  display: flex;
  align-items: baseline;
}

li {
  box-sizing: border-box;
  margin: 0 1rem;
  background-color: rgba($info, 0.3);
  color: rgba($black,0.7);
  border-radius: 10px;
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding: 2rem;

  &.design-section {
    color: white;
  }
}

.icon {
  margin: $icon-margin 0;

  i {
    font-size: 4rem;
  }
}

.button.is-large {
  min-width: 280px;
}
</style>

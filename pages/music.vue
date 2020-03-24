<template>
  <div>
    <Hero class="is-large is-primary" :background="require('~/assets/img/svg/alt-bg-graphic.svg')">
      <template #second>
        <h1 class="title is-1">
          {{ title }}
        </h1>
        <h2 class="subtitle is-3">
          ...drummer, composer, session musician and teacher
        </h2>
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
        <div class="columns">
          <div v-for="(band, idx) in bands" :key="idx" class="band-card column is-4" :style="('background-image: url(' + band.image + ');') + (band.cover ? 'background-size: cover;' : '')">
            <div class="card-content">
              <h2 class="subtitle is-5 has-text-white">
                {{ band.name }}
              </h2>
              <p class="content">
                {{ band.description }}
              </p>
              <a v-if="band.link !== undefined" class="content button is-outlined is-danger" :href="band.link">
                Read about {{ band.name }}
              </a>
            </div>
          </div>
        </div>
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
      title: "I'm a musician",
      images: [require('~/assets/img/close-up-photo-ofg-light-bulb-716398.jpg')],
      bands: [
        {
          name: 'In Caravans',
          description: 'A concert with In Caravans is like a 200 MPH road trip through the desert in a truck without brakes, passing through eerie and mysterious sceneries. Atmospheric, yet straight to the point, In Caravans alternates between fleeting emotion and no-nonsense indie rock.',
          link: 'http://www.incaravans.com',
          image: require('~/assets/img/InCaravansHeader-min.jpg')
        },
        {
          name: 'MARCE',
          description: 'With inspiration from both the newer Indie scene and the old folk tradition, they create a separate and unique univers. MARCE are not afraid to take their time in the music, but their refined and thourough sound keeps the audience engaged.',
          image: require('~/assets/img/svg/MARCE.svg')
        },
        {
          name: 'Spraglgevær',
          description: 'With inspiration from both the newer Indie scene and the old folk tradition, they create a separate and unique univers. MARCE are not afraid to take their time in the music, but their refined and thourough sound keeps the audience engaged.',
          image: require('~/assets/img/spraglgevaer.jpg'),
          cover: true
        }
      ]
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

.band-card {
  margin: 1rem;
  color: white;
  background-color: #0d0d0d;
  background-position: center;
  background-repeat: no-repeat;
  // background-origin: padding-box;
  background-size: contain;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: "";
    border-radius: 10px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    transition: all linear 0.2s;

    @include desktop() {
      background-color: transparent;
    }
  }

  .card-content {
    position: relative;
    height: 100%;

    @include desktop() {
      transform: translateY(100%);
      transition: all linear 0.2s;
    }
  }

  @include desktop() {
    &:hover {
      .card-content {
        transform: translateY(0);
      }

      &::before {
        background-color: rgba(0,0,0,0.7);
      }
    }
  }
}
</style>

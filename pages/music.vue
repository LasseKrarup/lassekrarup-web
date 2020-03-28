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
        <h2 class="title is-3">
          Projects and bands
        </h2>
        <h2 class="subtitle is-5">
          The stuff that I tour and record with
        </h2>
        <Carousel :bands="bands" />
          <!-- <p class="has-text-grey scroll-indicator">
          (Hover your cursor above the images for info and scroll vertically for more projects)
        </p>
        <div class="carousel-container">
          <div class="scroll-arrow scroll-arrow-left" :class="{'active': leftArrowActive}">
            <span class="icon is-large">
              <i class="mdi mdi-chevron-left" />
            </span>
          </div>
          <div class="scroll-arrow scroll-arrow-right" :class="{'active': rightArrowActive}">
            <span class="icon is-large">
              <i class="mdi mdi-chevron-right" />
            </span>
          </div>
          <div ref="carousel" class="columns">
            <div v-for="(band, idx) in bands" :key="idx" class="band-card-container column is-4">
              <div class="band-card" :style="('background-image: url(' + band.image + ');') + (band.cover ? 'background-size: cover;' : '')">
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
          </div>
        </div> -->
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
          description: 'With inspiration from both the newer Indie scene and the old folk tradition, they create a separate and unique univers. MARCE are not afraid to take their time in the music, but their refined and thourough sound keeps the audience engaged.',
          image: require('~/assets/img/svg/MARCE.svg')
        },
        {
          name: 'Spraglgevær',
          description: 'The sound of Spraglgevær is often melancholic yet energetic with inspiration from great danish songwriters such as Peter Sommer and Søren Huss. In the lyrics Spraglgevær seek to explore human interaction and why we often miscommunicate. One can expect a concert with plenty of energy, presence and recklessness.',
          image: require('~/assets/img/spraglgevaer.jpg'),
          cover: true,
          link: 'https://www.instagram.com/spraglgevaer.music/'
        },
        {
          name: 'North Avenue',
          description: "is one of Denmarks greatest cover bands. With references from both the small and large stages and all kinds of events, you'll never go wrong with North Avenue.",
          link: 'https://www.northavenue.dk',
          image: require('~/assets/img/NA-img-min.jpg'),
          cover: true
        },
        {
          name: 'PartyModulet',
          description: 'PartyModulet is the perfect replacement for a DJ. We play all the pop hits that DJ Spotify knows - also the knew ones. With a repertoire filled with fresh pop music, we deliver a full fledged party experience.',
          image: require('~/assets/img/modulet-img.jpg'),
          link: 'http://www.modulet.dk/Party/',
          cover: true
        }
      ]
    })
  },
  // mounted () {
  //   this.$refs.carousel.addEventListener('scroll', this.handleScroll)
  // },
  // methods: {
  //   handleScroll (event: { target: Element }) : void {
  //     if (event.target !== null) {
  //       const scrollWidth = event.target.scrollWidth
  //       const scrollLeft = event.target.scrollLeft
  //       const clientWidth = event.target.clientWidth

  //       if (scrollLeft > 20) {
  //         this.leftArrowActive = true
  //       } else {
  //         this.leftArrowActive = false
  //       }

  //       if ((scrollWidth - clientWidth - scrollLeft) > 20) {
  //         this.rightArrowActive = true
  //       } else {
  //         this.rightArrowActive = false
  //       }
  //     }
  //   }
  // },
  head () {
    const title:string = this.title
    return ({
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

// .columns {
//   @include desktop {
//     overflow-x: scroll;
//     position: relative;
//   }
// }

// .band-card-container {
//   padding: 1rem;
//   width: 100%;
//   position: relative;
//   display: flex;

// }

// .carousel-container {
//   position: relative;
//   // contain: paint;
// }

// .scroll-arrow {
//   display: none;

//   @include desktop() {
//     font-size: 3rem;
//     color: white;
//     z-index: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 3rem;
//     min-height: 100%;
//     position: absolute;
//     top: 0;
//     opacity: 0;
//     transition: opacity ease-in 0.2s;

//     span {
//       border-radius: 50%;
//       background-color: rgba(0,0,0,0.8) !important;
//     }

//     &.active {
//       opacity: 1;
//     }

//     &.scroll-arrow-left {
//       left: -2rem;
//     }
//     &.scroll-arrow-right {
//       right: -2rem;
//     }
//   }
// }

// .scroll-indicator {
//   display: none;
//   @include desktop {
//     display: block;
//   }
// }

// .band-card {
//   flex-basis: 0;
//   flex-grow: 1;
//   flex-shrink: 1;
//   color: white;
//   background-color: #0d0d0d;
//   background-position: center;
//   background-repeat: no-repeat;
//   // background-origin: padding-box;
//   background-size: contain;
//   position: relative;
//   border-radius: 10px;
//   overflow: hidden;

//   &::before {
//     content: "";
//     border-radius: 10px;
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0,0,0,0.7);
//     transition: all linear 0.2s;

//     @include desktop() {
//       background-color: transparent;
//     }
//   }

//   .card-content {
//     position: relative;
//     height: 100%;

//     @include desktop() {
//       transform: translateY(100%);
//       transition: all linear 0.2s;
//     }
//   }

//   @include desktop() {
//     &:hover {
//       .card-content {
//         transform: translateY(0);
//       }

//       &::before {
//         background-color: rgba(0,0,0,0.7);
//       }
//     }
//   }
// }
</style>

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
          I'm a musician and a web designer
        </h2>

        <div class="columns content is-vcentered">
          <div class="column has-text-centered">
            <nuxt-link class="button is-large  is-danger is-outlined" to="/music">
              Read about my music
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

    <Section>
      <Column delay="0.2s">
        <h2 class="subtitle is-3">
          Drummer and session musician
        </h2>
        <p class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos nobis at illum debitis! Quam quae aut unde, ad saepe at recusandae in eveniet quibusdam omnis possimus esse alias beatae, excepturi repudiandae facere soluta nulla accusantium? Recusandae deserunt eligendi, magnam sed mollitia voluptatibus alias velit reprehenderit perferendis modi voluptate facere?
        </p>

        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis beatae eaque tempora quas minus alias, nulla quis ratione doloremque sapiente sunt vitae iste dolorem inventore enim veniam? Quia itaque ullam eaque distinctio numquam, dolores expedita quasi, quidem officia, quod dolorem ratione sunt. Earum, odio similique. Asperiores recusandae quia neque!
        </p>
      </Column>
      <Column direction="right" delay="0.5s">
        <img src="~/assets/img/close-up-photo-of-drum-set-995301.jpg" alt="Drummer">
      </Column>
    </Section>

    <Section class="is-primary" :background="images[0]" vcenter overlay-color="rgba(30,30,200,0.8)">
      <Column direction="bottom" delay="0.8s" class="has-text-centered">
        <nuxt-link class="button is-outlined is-large is-success" to="/webdesign">
          See my work here
        </nuxt-link>
      </Column>
      <Column direction="bottom">
        <h2 class="subtitle is-3 has-text-white">
          Gain online presence instantly
        </h2>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur qui fugit cum minima rerum perferendis rem, consectetur aliquam repudiandae earum, natus porro repellat, aliquid corporis at tempora quo officiis soluta quaerat. Accusantium sit obcaecati quidem exercitationem nobis non quaerat.
        </p>
        <p class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium itaque amet aliquam dolore provident deleniti, consectetur quos. Eius, sed. Mollitia reprehenderit praesentium sed sit hic expedita doloremque dolore dolores numquam, quidem possimus? Aut, ea animi! Quidem tenetur excepturi, molestias necessitatibus at aut repellendus expedita, quo vitae doloribus vel maiores quod!
        </p>
      </column>
    </Section>

    <Section>
      <Column direction="top" class="has-text-centered">
        <h2 class="subtitle is-3">
          Hire me as a teacher
        </h2>

        <div class="content">
          <ul>
            <li v-for="(icon, idx) in musicIcons" :key="idx">
              <span class="icon">
                <i class="mdi" :class="'mdi-' + icon.name" />
              </span>
              {{ icon.description }}
            </li>
          </ul>
        </div>
      </Column>
    </Section>

    <Section overlay-color="rgba(30,30,200,0.7)" class="design-section">
      <Column direction="top" class="has-text-centered">
        <h2 class="subtitle is-3 has-text-white">
          Hire me as a webdesigner
        </h2>

        <div class="content">
          <ul>
            <li v-for="(icon, idx) in designIcons" :key="idx">
              <span class="icon">
                <i class="mdi" :class="'mdi-' + icon.name" />
              </span>
              {{ icon.description }}
            </li>
          </ul>
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
      title: 'Become seen. And heard.',
      images: [
        require('~/assets/img/apple-computer-decor-design-326502.jpg'),
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
      titleTemplate: 'Lasse Krarup - %s',
      title
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
</style>

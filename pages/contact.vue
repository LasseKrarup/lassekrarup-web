<template>
  <div>
    <Hero class="is-large is-primary" :background="require('~/assets/img/svg/alt-bg-graphic-3.svg')" background-position="center">
      <template #second>
        <h1 class="title is-1">
          {{ title }}
        </h1>
        <h2 class="subtitle is-3">
          ...or just for a quick chat. Don't be shy.
        </h2>
      </template>
    </Hero>

    <Section>
      <Column>
        <h2 class="title is-3">
          Feel free to contact me
        </h2>
        <h3 class="subtitle is-5">
          or check me out on any of these platforms
        </h3>

        <p class="content">
          If you want an offer on web design or a logo design, or if you want to hire me for lessons, you can use any of the contacts listed here. You can also write me if you want to hire me as a studio technician, mixing engineer or session musician.
        </p>
      </Column>

      <Column>
        <ul>
          <li v-for="(contact, idx) in contacts" :key="idx">
            <span class="icon is-medium"><i :class="'mdi mdi-' + contact.icon" /></span> <a :href="contact.href" target="_blank"> {{ contact.text }} </a>
          </li>
        </ul>
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
      title: 'Contact me for music related stuff or web design',
      contacts: [
        {
          icon: 'email-outline',
          text: 'me@lassekrarup.com',
          href: 'mailto:me@lassekrarup.com'
        },
        {
          icon: 'cellphone-iphone',
          text: '+45 4162 1410',
          href: '#'
        },
        {
          icon: 'facebook',
          text: 'Facebook',
          href: 'https://www.facebook.com/latze'
        },
        {
          icon: 'linkedin',
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/lasse-herold-krarup-397751180/'
        },
        {
          icon: 'github',
          text: 'GitHub',
          href: 'https://github.com/LasseKrarup'
        },
        {
          icon: 'instagram',
          text: 'Instagram',
          href: 'https://www.instagram.com/clapdawg/'
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
          hid: 'description', name: 'description', content: "Contact me if you're interested in drumming lessons or if you want an offer on website design."
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
}

.icon {
  margin-left: 2rem;
  margin-right: 1rem;
}
</style>

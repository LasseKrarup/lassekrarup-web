<template>
  <div>
    <Navbar :links="links" />
    <nuxt />
    <Footer :links="links" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    links: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Music',
        path: '/music'
      },
      {
        name: 'Web Design',
        path: '/webdesign'
      },
      {
        name: 'About me',
        path: '/about'
      },
      {
        name: 'Contact',
        path: '/contact'
      }
    ]
  })
})
</script>

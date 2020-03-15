<template>
  <div>
    <Navbar :links="links" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
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
        name: 'Contact',
        path: '/contact'
      }
    ]
  })
}
</script>

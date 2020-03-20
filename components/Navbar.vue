<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation" :class="classObject">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" :class="{ 'has-scrolled': hasScrolled }" to="/">
        <img class="logo" src="~/assets/img/svg/LK_logo_white.svg" alt="Logo">
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger is-vcentered"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start" />
      <div class="navbar-end">
        <nuxt-link v-for="(link, idx) in links" :key="idx" class="navbar-item" :to="link.path" @click.native="function(){isActive = false}">
          {{ link.name }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar',
  props: {
    links: {
      type: Array,
      default: undefined
    }
  },
  data () {
    return ({
      isActive: false,
      hasScrolled: false
    })
  },
  computed: {
    classObject () {
      return ({
        // @ts-ignore
        'has-scrolled': this.hasScrolled,
        // @ts-ignore
        'is-primary': !this.hasScrolled,
        // @ts-ignore
        'is-info': this.hasScrolled
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event: Event) : void {
      if (window.pageYOffset >= 50) {
        this.hasScrolled = true
      } else {
        this.hasScrolled = false
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  box-sizing: border-box !important;
  height: 4rem;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  transition: all 0.5s ease-in;

  &.is-primary {
    background-color: transparent !important;
  }

  &.has-scrolled {
    box-shadow: 0 0 5px rgba(0,0,0,0.5);

    @media screen and (min-width: $desktop) {
      height: 5rem;
      font-size: 1.2rem;
    }
  }
}

.navbar-brand {
  a {
    transition: transform 0.5s ease-in;
    transform: translateX(-4rem);

    &.has-scrolled {
      transform: translateX(0);
    }
  }
}

img {
  &.logo {
    max-height: 3rem !important;
    height: 3rem !important;
  }
}
</style>

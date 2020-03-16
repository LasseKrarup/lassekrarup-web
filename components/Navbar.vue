<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation" :class="{ 'has-scrolled': hasScrolled }">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img class="logo" src="~/assets/img/svg/LK_logo_white.svg" :class="{ 'has-scrolled': hasScrolled }" alt="Logo">
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
$light-background: lighten($primary, 5%);

.navbar {
  box-sizing: border-box !important;
  height: 4rem;
  border-bottom: 1px solid rgba(255,255,255,0.3);

  transition-property: all, transform;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  .logo {
    transition: all 0.5s ease-in-out;
    max-height: 3rem;
    height: 3rem;

    @media screen and (min-width: $desktop){
      &.has-scrolled {
        height: 4rem;
        max-height: 4rem;
      }
    }
  }

  &.has-scrolled {
    background-color: $light-background;
    border-color: $light-background;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);

    @media screen and (min-width: $desktop) {
      height: 5rem;
      font-size: 1.2rem;
    }
  }
}
</style>

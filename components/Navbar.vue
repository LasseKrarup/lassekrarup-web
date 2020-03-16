<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img src="~/assets/img/svg/LK_logo_white.svg" height="3rem" alt="Logo">
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
export default {
  props: {
    links: {
      type: Array,
      default: undefined
    }
  },
  data () {
    return ({
      isActive: false
    })
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  box-sizing: border-box !important;
  height: 4rem;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}

.navbar-item {
  img {
    max-height: 3rem;
  }
}
</style>

<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container animated" :class="{ 'loaded': isLoaded }">
        <div>
          <slot name="first" />
        </div>
        <div class="animated content" :class="{ 'loaded': isLoaded }">
          <slot name="second" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
  },
  data () {
    return ({
      isLoaded: false
    })
  },
  mounted () {
    this.isLoaded = true
  }
})
</script>

<style lang="scss" scoped>
.hero-body .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(4rem);

  &.loaded {
    transform: translateY(0);
  }

  img {
    margin: auto;

  }
}

div.content {
  &.animated {
    opacity: 0;
  }
  text-align: justify;
  padding-top: 2rem;

  @media screen and (min-width: $desktop){
    width: 60vw;
  }

  &.loaded {
    opacity: 1;
  }
}

.animated {
  transition: transform 1.5s ease-in-out 0.5s, opacity 0.5s linear 2s;
}
</style>

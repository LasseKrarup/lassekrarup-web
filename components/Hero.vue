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
    <div v-if="arrow" class="arrow-down" :class="{ 'loaded': isLoaded }" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Hero',
  props: {
    arrow: {
      type: Boolean,
      default: false
    }
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
  transition: transform ease-in-out 0.5s, opacity 0.5s linear 0.5s;
}

.arrow-down {
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  border-bottom: 4px solid;
  border-right: 4px solid;
  border-color: rgba($white, 0.3);
  position: absolute;
  box-shadow: 3px 3px 2px rgba(0,0,0,0.1);
  left: 50%;
  bottom: 1rem;
  transform: rotate(45deg) translateX(-50%);
  z-index: 10;
  opacity: 0;
  transition: opacity 0.5s linear 1.5s;

  @include desktop {
    bottom: 4rem;
  }

  &.loaded {
    opacity: 1;
    animation: 2s ease-out infinite bounce;
  }
}
</style>

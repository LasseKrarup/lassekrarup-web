<template>
  <footer class="footer">
    <div class="columns">
      <div id="footer-left" class="column content is-4 has-text-centered">
        <ul>
          <li v-for="(link, idx) in links" :key="idx">
            <nuxt-link :to="link.path">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="column is-4">
        <div class="content has-text-centered">
          <a v-for="(icon, idx) in icons" :key="idx" :href="icon.path" class="button social-icon is-success is-outlined">
            <span class="icon">
              <i :class="'mdi-' + icon.name" class="mdi" />
            </span>
          </a>
          <p class="has-text-grey-light">
            {{ (new Date).getFullYear() }} - Lasse Krarup
          </p>
        </div>
      </div>
      <div class="column is-4 has-text-centered">
        <nuxt-link to="/contact" class="button is-outlined is-success">
          Contact me
        </nuxt-link>
      </div>
    </div>
  </footer>
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
      icons: [
        {
          name: 'facebook',
          path: 'https://www.facebook.com/latze'
        },
        {
          name: 'instagram',
          path: 'https://www.instagram.com/clapdawg/'
        },
        {
          name: 'github',
          path: 'https://github.com/LasseKrarup'
        },
        {
          name: 'linkedin',
          path: 'https://www.linkedin.com/in/lasse-herold-krarup-397751180/'
        }
      ]
    })
  }
})
</script>

<style lang="scss" scoped>
.content {
    padding-top: 1rem;
}

a:hover {
    color: darken($link, 10%);
}

a.disabled-link {
    color: $grey-light;

    &:hover {
        color: $grey;
    }
}

.social-icon {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem 1rem 0.5rem;
}

.columns {
    justify-content: center;
    align-items: center;
}

li {
  display: inline;
  list-style: none;

  &::after {
    content: "|";
    margin: 0 0.5rem;
  }

  &:last-child::after {
    content: none;
  }
}

// #footer-left {
//   @include desktop {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// }
</style>

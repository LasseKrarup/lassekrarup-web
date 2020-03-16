<template>
  <footer class="footer">
    <div class="columns">
      <div class="column content is-3">
        <ul>
          <li v-for="(link, idx) in links" :key="idx">
            <nuxt-link :to="link.path">
              {{ link.name }}
            </nuxt-link>
          </li>
          <li>
            <a class="disabled-link" href="/sitemap.xml">Sitemap</a>
          </li>
        </ul>
      </div>
      <div class="column is-3">
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
      <div class="column is-3" />
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
          path: '#'
        },
        {
          name: 'instagram',
          path: '#'
        },
        {
          name: 'git',
          path: '#'
        },
        {
          name: 'linkedin',
          path: '#'
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
</style>

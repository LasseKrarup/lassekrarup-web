<template>
  <div>
    <div class="tile is-ancestor">
      <Tile :tile="tiles[0]" />
      <Tile :tile="tiles[1]" />
    </div>
    <div class="tile is-ancestor">
      <Tile :tile="tiles[2]" />
      <Tile :tile="tiles[3]" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tile from '~/components/Tile.vue'

export default Vue.extend({
  components: {
    Tile
  },
  props: {
    tiles: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
</style>

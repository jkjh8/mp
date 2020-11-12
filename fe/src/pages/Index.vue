<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
         Current Playlist {{ playlistId }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters('playlist', ['playlistId'])
  }
}
</script>

<template>
  <div>
    <q-item>
      <q-item-section avatar>
        <q-avatar color="secondary">
          <q-icon name="mdi-play" size="32px" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>PLAYLIST</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-select
          v-model="playlistSel"
          :options="list"
          label="Select Playlist"
          dense
          style="width: 200px"
          @input="call_playlist()"
        />
      </q-item-section>
      <q-item-section side>
        <q-btn icon="mdi-play" round flat>
          <q-tooltip>Playlist play</q-tooltip>
        </q-btn>
      </q-item-section>

      <q-item-section side>
        <q-btn icon="mdi-stop" round flat>
          <q-tooltip>Playlist play</q-tooltip>
        </q-btn>
      </q-item-section>

      <q-item-section side>
        <q-btn icon="mdi-plus-circle-outline" round flat @click='addlist'>
          <q-tooltip>add file info playlist</q-tooltip>
        </q-btn>
      </q-item-section>

    </q-item>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('playlist', ['playlistName']),
    ...mapGetters('playlist', ['playlistId'])
  },
  mounted () {
    this.playlistSel = this.playlistName
  },
  data () {
    return {
      list: ['Playlist 1', 'Playlist 2', 'Playlist 3', 'Playlist 4', 'Playlist 5', 'Playlist 6', 'Playlist 7', 'Playlist 8'],
      playlistSel: ''
    }
  },
  methods: {
    select_palylist () {
      this.playlistSel = this.playlistName
    },
    async call_playlist () {
      await this.$store.dispatch('playlist/setPlaylistName', this.playlistSel)
      this.$store.dispatch('playlist/reqPlaylist')
    },
    addlist () {
      this.$emit('addlist')
    }
  }
}
</script>

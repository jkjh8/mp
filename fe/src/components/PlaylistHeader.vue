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
  mounted () {
    this.select_palylist()
  },
  computed: {
    ...mapState('playlist', ['playlistName']),
    ...mapGetters('playlist', ['playlistId'])
  },
  // watch: {
  //   playlistSel (value) {
  //     this.$store.dispatch('playlist/setPlaylistName', value)
  //   }
  // },
  data () {
    return {
      list: ['Playlist 1', 'Playlist 2', 'Playlist 3', 'Playlist 4', 'Playlist 5', 'Playlist 6', 'Playlist 7', 'Playlist 8'],
      playlistSel: null
    }
  },
  methods: {
    select_palylist () {
      this.playlistSel = this.playlistName
    },
    call_playlist () {
      this.$store.dispatch('playlist/setPlaylistName', this.playlistSel)
      this.$axios.get(`/playlist/${this.playlistId - 1}`).then((res) => {
        this.$emit('rtPlaylist', res.data)
        console.log(res.data)
      }).catch((err) => {
        if (err.response.status === 403) {
          this.$router.push('/login')
        }
      })
    },
    addlist () {
      this.$emit('addlist')
    }
  }
}
</script>

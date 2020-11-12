<template>
  <div class="q-ma-xl">
    <q-card>
      <q-card-section>
        <PlaylistHeader @addlist="addFileDialog=!addFileDialog" />
      </q-card-section>
      <q-separator />

      <q-card-section>
        <PlaylistTable />
      </q-card-section>
    </q-card>

    <q-dialog v-model="addFileDialog">
       <q-card style="max-width: 1500px; width: 800px">
        <q-card-section class="q-pa-none">
          <FilelistTable :selFilelist="selFilelist" @selFile="selFile" />
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Confirm" color="primary" v-close-popup @click="updatePlaylist" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import PlaylistHeader from '../components/PlaylistHeader'
import PlaylistTable from '../components/PlaylistTable'
import FilelistTable from '../components/FilelistTable'
import { mapGetters } from 'vuex'

export default {
  components: { PlaylistHeader, PlaylistTable, FilelistTable },
  computed: {
    ...mapGetters('playlist', ['playlistId'])
  },
  async mounted () {
    await this.$store.dispatch('user/getUser')
    if (this.$store.state.user.authUser === null) return this.$router.push('/login')
    await this.$store.dispatch('playlist/reqPlaylist')
  },
  data () {
    return {
      addFileDialog: false,
      listData: [],
      selFilelist: []
    }
  },
  methods: {
    selFile (filelist) {
      this.listData = filelist
    },
    async updatePlaylist () {
      await this.$store.dispatch('playlist/addPlaylist', this.listData)
      await this.$store.dispatch('playlist/reqPlaylist')
    }
  }
}
</script>

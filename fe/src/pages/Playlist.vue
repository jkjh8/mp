<template>
  <div class="q-ma-xl">
    <q-card>
      <q-card-section>
        <PlaylistHeader @rtPlaylist="rtPlaylist" @addlist="addFileDialog=!addFileDialog" />
      </q-card-section>
      <q-separator />

      <q-card-section>
        <PlaylistTable :listData="listData" />
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
import { mapState, mapGetters } from 'vuex'

export default {
  components: { PlaylistHeader, PlaylistTable, FilelistTable },
  computed: {
    ...mapState('playlist', ['playlistName']),
    ...mapGetters('playlist', ['playlistId'])
  },
  watch: {
    addFileDialog (value) {
      if (this.addFileDialog === false) {
        console.log('reset')
        this.selFilelist = []
      }
    }
  },
  created () {
    this.$store.dispatch('user/getUser')
    if (!this.$store.state.user.authUser) return this.$router.push('/login')
  },
  data () {
    return {
      listData: [],
      addFileDialog: false,
      selFilelist: []
    }
  },
  methods: {
    rtPlaylist (list) {
      this.listData = list
    },
    selFile (filelist) {
      this.selFilelist = filelist
      // console.log(this.selFilelist)
    },
    async updatePlaylist () {
      await this.selFilelist.forEach((file) => {
        this.listData.push(file)
      })
      console.log(this.listData)
      const rtlist = []
      await this.listData.forEach((file, index) => {
        file.playid = index
        rtlist.push(file)
      })
      this.listData = rtlist
      console.log(this.listData)
      try {
        await this.$axios.post('/playlist', { id: this.playlistId - 1, list: this.listData })
      } catch (err) {
        if (err.response.status === 403) {
          this.$router.push('/login')
        }
      }
    }
  }
}
</script>

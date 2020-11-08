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
import { mapState } from 'vuex'

export default {
  components: { PlaylistHeader, PlaylistTable, FilelistTable },
  computed: {
    ...mapState(['playlistId'])
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
    this.$axios.get('/login').then((res) => {
      if (res.data.user) {
        this.$store.commit('setUser', res.data.user)
      } else {
        this.$router.push('/')
      }
    })
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
      const id = this.playlistId.replace(/[^0-9]/g, '')
      await this.selFilelist.forEach((file) => {
        this.listData.push(file)
      })
      const rtlist = []
      await this.listData.forEach((file, index) => {
        file.playid = index
        rtlist.push(file)
      })
      this.listData = rtlist
      try {
        await this.$axios.post('/playlist', { id: id - 1, list: this.listData })
      } catch (err) {
        if (err.response.status === 403) {
          this.$router.push('/login')
        }
      }
    }
  }
}
</script>

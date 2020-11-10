q<template>
  <div class="q-ma-xl">
    <q-card>
      <q-card-section>
        <FilelistHeader @upload="uploaddialog = !uploaddialog" @delFiles="delFiles"/>
      </q-card-section>
      <q-separator />

      <q-card-section>
        <FilelistTable :selFilelist="selFilelist" @selFile="selFile" @preview="preview" />
      </q-card-section>
    </q-card>

    <q-dialog v-model="uploaddialog" persistent>
      <FileUpload @upload="uploaddialog = !uploaddialog" />
    </q-dialog>

    <q-dialog v-model="previewDialog">
      <div style="width: 100%">
        <q-video
          :autoplay="true"
          :ratio="16/9"
          :src="src"
        />
      </div>
    </q-dialog>
  </div>
</template>

<script>
import FilelistHeader from '../components/FilelistHeader'
import FileUpload from '../components/FileUpload'
import FilelistTable from '../components/FilelistTable'
let delFilelist = []

export default {
  components: { FilelistHeader, FileUpload, FilelistTable },
  created () {
    this.$store.dispatch('user/getUser')
    if (!this.$store.state.user.authUser) return this.$router.push('/login')
  },
  data () {
    return {
      uploaddialog: false,
      selFilelist: [],
      previewDialog: false,
      src: ''
    }
  },
  methods: {
    preview (id) {
      this.src = `http://${window.location.hostname}:3000/api/preview/${id}`
      this.previewDialog = true
    },
    async delFiles () {
      await this.$axios.post('/filelist/del', delFilelist)
      await this.$store.dispatch('filelist/refreshFilelist')
      this.selFilelist = []
    },
    selFile (filelist) {
      delFilelist = filelist
    }
  }
}
</script>

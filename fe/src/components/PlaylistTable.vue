<template>
  <q-table
  :data="listData"
  :columns="columns"
  >
    <template v-slot:body="props">
      <q-tr :props="props" :key="props.row.index">
          <q-td
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          <div v-if="col.name === 'action'">
            <q-btn flat round color="primary" size="0.8em" icon="mdi-play" @click="playid(props.pageIndex)" />
            <q-btn flat round color="red" size="0.8em" icon="mdi-stop" @click="playid(props.pageIndex)" />
            <q-btn flat round color="black" size="0.8em" icon="mdi-delete" @click="del(props.pageIndex)" />
            <q-btn flat round color="black" size="0.8em" icon="mdi-chevron-up" @click="changeList(props.pageIndex, props.pageIndex - 1)" />
            <q-btn flat round color="black" size="0.8em" icon="mdi-chevron-down" @click="changeList(props.pageIndex, props.pageIndex + 1)" />
          </div>
          <div v-else>
            {{ col.value }}
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
import { mapState } from 'vuex'
import format from '../api/formats'

export default {
  props: ['listData'],
  computed: {
    ...mapState(['playlistId'])
  },
  data () {
    return {
      columns: [
        { name: 'id', label: 'ID', align: 'center', field: 'playid', format: val => `${val + 1}` },
        { name: 'name', label: 'NAME', align: 'left', field: 'name' },
        { name: 'duration', label: 'DURATION', align: 'center', field: 'duration', format: val => `${format.formatTimes(val * 1000)}` },
        { name: 'action', label: 'ACTION', align: 'center' }
      ]
    }
  },
  methods: {
    playid (playid) {
      const id = this.playlistId.replace(/[^0-9]/g, '')
      this.$axios.get(`/player/playid?id=${id - 1}&playid=${playid}`)
    },
    stop () {
      this.$axios.get('/player.stop')
    },
    async changeList (fromIndex, toIndex) {
      const minIndex = 0
      const maxIndex = this.listData.length - 1

      if (maxIndex < toIndex) { return }
      if (toIndex < minIndex) { return }

      this.listData.splice(toIndex, 0, this.listData.splice(fromIndex, 1)[0])
      await this.changePlayId()
      this.updatePlaylist()
    },
    changePlayId () {
      for (let i = 0; i < this.listData.length; i++) {
        this.listData[i].playid = i
      }
    },
    async updatePlaylist () {
      const id = this.playlistId.replace(/[^0-9]/g, '')
      try {
        await this.$axios.post('/playlist', { id: id - 1, list: this.listData })
      } catch (err) {
        if (err.response.status === 403) {
          this.$router.push('/login')
        }
      }
    },
    async del (fileIndex) {
      const id = this.playlistId.replace(/[^0-9]/g, '')
      const rtlist = []
      this.listData.splice(fileIndex, 1)
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

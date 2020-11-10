<template>
  <q-table
  :data="curPlaylist"
  :columns="columns"
  row-key="index"
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
import { mapState, mapGetters } from 'vuex'
import format from '../api/formats'

export default {
  computed: {
    ...mapState('playlist', ['curPlaylist']),
    ...mapGetters('playlist', ['playlistId'])
  },
  mounted () {
    this.$store.dispatch('playlist/reqPlaylist')
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
      this.$axios.get(`/player/pi?id=${this.playlistId - 1}&playid=${playid}`)
    },
    stop () {
      this.$axios.get('/player.stop')
    },
    async changeList (fromIndex, toIndex) {
      var squPlaylist = []
      this.curPlaylist.forEach(file => {
        squPlaylist.push(file)
      })
      const minIndex = 0
      const maxIndex = squPlaylist.length - 1

      if (maxIndex < toIndex) { toIndex = minIndex }
      if (toIndex < minIndex) { toIndex = maxIndex }

      await squPlaylist.splice(toIndex, 0, squPlaylist.splice(fromIndex, 1)[0])
      await this.$axios.post('/playlist', { id: this.playlistId - 1, list: squPlaylist })
      await this.$store.dispatch('playlist/reqPlaylist')
      await this.$store.dispatch('playlist/rebuildPlaylist')
    },
    async del (playid) {
      await this.$axios.post('/playlist/remove', { id: this.playlistId - 1, playid: playid })
      await this.$store.dispatch('playlist/reqPlaylist')
      await this.$store.dispatch('playlist/rebuildPlaylist')
    }
  }
}
</script>

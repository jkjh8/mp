<template>
  <q-table
    v-model="selected"
    :data="filelist"
    :columns="columns"
    row-key="index"
    selection="multiple"
    :selected.sync="selected"
    :filter="filter"
  >
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:body-cell-action="props">
      <q-td :props="props">
        <q-btn dense round flat color="primary" @click="preview(props.row.name)" icon="mdi-play" />
      </q-td>
    </template>
  </q-table>
</template>

<script>
import { mapState } from 'vuex'
import format from '../api/formats'

export default {
  props: ['selFilelist'],
  computed: {
    ...mapState(['filelist'])
  },
  mounted () {
    this.updateFilelist()
    // this.$socket.on('playlist', (data) => { console.log(data) })
  },
  watch: {
    selected (value) {
      this.$emit('selFile', value)
    },
    selFilelist (value) {
      this.selected = value
    }
  },
  data () {
    return {
      columns: [
        { name: 'index', label: '#', field: 'index' },
        { name: 'name', label: 'NAME', align: 'left', field: 'name' },
        {
          name: 'size',
          label: 'SIZE',
          align: 'center',
          field: 'size',
          format: val => `${format.formatBytes(val)}`
        },
        {
          name: 'duration',
          label: 'DURATION',
          align: 'center',
          field: 'duration',
          format: val => `${format.formatTimes(val * 1000)}`
        },
        {
          name: 'action',
          label: 'ACTION',
          align: 'center',
          field: ''
        }
      ],
      selected: this.selFilelist,
      filter: ''
    }
  },
  methods: {
    async updateFilelist () {
      const files = await this.$axios.get('filelist')
      if (files.data) {
        const rtdata = []
        files.data.forEach((file, index) => {
          file.index = index + 1
          rtdata.push(file)
        })
        this.$store.dispatch('updateFilelist', rtdata)
      }
    },
    preview (id) {
      this.$emit('preview', id)
    }
  }
}
</script>

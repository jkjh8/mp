<template>
  <div class="q-ma-xl">
    <q-card>
      <q-item>
        <q-item-section avatar>
          <q-avatar color="green">
            <q-icon name="mdi-play-circle-outline" size="32px" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>PLAYLIST</q-item-label>
          <q-item-label caption>
            Input your id and password
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <q-table
          :data="data"
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
                  <q-btn
                    @click="playid(col)">Play
                  </q-btn>
                </div>
                <div v-else>
                  {{ col.value }}
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
    {{ data }}
  </div>
</template>

<script>
import FormatUtil from '../api/FormatChange'
export default {
  created () {
    this.$axios.get('/login').then((res) => {
      if (res.data.user) {
        this.$store.commit('setUser', res.data.user)
      } else {
        this.$router.push('/')
      }
    })
  },
  mounted () {
    this.$axios.get('/playlist').then((res) => {
      this.data = res.data
    }).catch((err) => {
      if (err.response.status === 403) {
        this.$router.push('/login')
      }
    })
  },
  data () {
    return {
      columns: [
        {
          name: 'id',
          label: 'ID',
          align: 'center',
          field: 'playid',
          format: val => `${val + 1}`
        },
        { name: 'name', label: 'NAME', align: 'left', field: 'name' },
        {
          name: 'duration',
          label: 'DURATION',
          align: 'center',
          field: 'duration',
          format: val => `${this.formatTimes(val)}`
        },
        { name: 'action', label: 'ACTION', align: 'left' }
      ],
      data: []
    }
  },
  methods: {
    playid (id) {
      console.log(id)
    },
    formatBytes (bytes, decimals = 2) {
      const listbytes = FormatUtil.formatBytes(bytes, decimals = 2)
      return listbytes
    },
    formatTimes (milliseconds) {
      const listtime = FormatUtil.formatTimes(milliseconds)
      return listtime
    }
  }
}
</script>

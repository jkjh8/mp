<template>
  <q-toolbar>
    <div class="q-pa-md" style="font-size: 2rem">
      <q-icon name="mdi-play-network-outline" class="q-mx-xm" />
      MEDIA SERVER
    </div>
    <q-space />
    <div>
      <p
        class="q-px-xs"
        style="font-size: 0.8rem"
        v-if="user"
      >
        {{ user.id }}
      </p>
      <q-btn
        round
        color="blue-grey-10"
        :icon="user ? 'mdi-lock-open-outline' : 'mdi-lock-outline'"
        @click="login"
      />
    </div>
  </q-toolbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({ user: 'authUser' })
  },
  data () {
    return {
      loginIcon: 'mdi-lock-outline'
    }
  },
  methods: {
    login () {
      if (this.user) {
        this.$axios.get('/logout').then((res) => {
          if (res.data.success) {
            this.$store.commit('setUser', null)
            this.$q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'Logout!'
            })
          }
        })
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

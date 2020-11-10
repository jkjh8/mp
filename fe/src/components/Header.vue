<template>
  <q-toolbar>
    <q-item class="q-pa-md">
      <q-btn flat style="font-size: 2em" to="/">
        <q-icon name="mdi-play-network-outline" class="q-mx-xm" />
        MEDIA SERVER
      </q-btn>
    </q-item>
    <q-space />
    <q-item>
      <q-item-section
        class="q-px-xs"
        style="font-size: 0.8rem"
        v-if="user"
      >
        {{ user.id }}
      </q-item-section>
      <q-item-section>
        <q-btn
          round
          color="blue-grey-10"
          :icon="user ? 'mdi-lock-open-outline' : 'mdi-lock-outline'"
          @click="login"
        />
      </q-item-section>
    </q-item>
  </q-toolbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: state => state.user.authUser
    })
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
            this.$store.dispatch('user/setUser', null)
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

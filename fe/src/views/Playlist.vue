<template>
  <div class="about">
    <h1>Play list</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  },
  created () {
    this.$http.get('/loginProcess').then((res) => {
      this.$store.commit('setUser', res.data.user)
      if (!this.user) {
        this.$router.push({ name: 'LoginPage' })
      }
    })
  //   if (!this.$store.state.user) {
  //     this.$http.get('/loginProcess').then((res) => {
  //       const user = res.user
  //       if (user) {
  //         this.$store.commit('setUser', user)
  //       } else {
  //         this.$router.push({ name: 'LoginPage' })
  //       }
  //     })
  //   }
  }
}
</script>

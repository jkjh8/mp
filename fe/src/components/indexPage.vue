<template>
  <div v-if="user">
    <p>접속한 유저</p>
    <p>아이디: {{ user.id }}</p>
    <p>비밀번호: {{ user.password }}</p>
    <p>이름: {{ user.name }}</p>
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
      const user = res.data.user
      if (user) {
        this.$store.commit('setUser', user)
      } else {
        // this.$router.push({ name: 'LoginPage' })
      }
    }).catch((err) => {
      console.error(err)
    })
  }
}
</script>

<template>
  <div>
    <v-form>
      <v-text-field
        v-model="id"
        label="ID"
      />
      <v-text-field
        v-model="password"
        label="Password"
      />
      <v-btn
        @click="onSubmit"
      >
        Login
    </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const id = this.id
      const password = this.password
      this.$http.post('/login', { id, password }).then((res) => {
        if (res.data.user) {
          this.$store.commit('setUser', res.data.user)
          this.$router.push({ name: 'IndexPage' })
        } else if (res.data.message) {
          alert(res.data.message)
        }
      }).catch((err) => {
        console.error(err)
      })
    }
  }
}
</script>

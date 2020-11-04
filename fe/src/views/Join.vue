<template>
  <v-container>
    <v-card class="ma-6">
      <v-card-title
        class="blue-grey lighten-5"
      >
        User Register
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            class="px-6"
            v-model="userInfo.id"
            label="ID"
          />
          <v-text-field
            class="px-6"
            v-model="userInfo.password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <v-btn
            :disabled="!valid"
            @click=onSubmit(userInfo)
          >
            Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        id: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (userInfo) {
      this.$http.post('/join', userInfo).then((res) => {
        if (res.data.user) {
          this.$store.commit('setUser', res.data.user)
          console.log(this.$store.state.user)
          this.$router.push({ name: '/' })
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

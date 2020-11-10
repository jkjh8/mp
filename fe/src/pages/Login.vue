<template>
  <div class="absolute-center">
    <q-card class="my-card" flat bordered style="min-width: 400px">
      <q-item>
        <q-item-section avatar>
          <q-avatar color="red">
            <q-icon name="mdi-lock-outline" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>LOGIN</q-item-label>
          <q-item-label caption>
            Input your id and password
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section>
        <q-form
          v-model="valid"
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            v-model="userInfo.id"
            label="ID"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            v-model="userInfo.password"
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn
            :disabled="!valid"
            style="absolute-right"
            label="LOGIN"
            type="submit"
            color="primary"/>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      valid: '',
      userInfo: {
        id: '',
        password: ''
      },
      isPwd: true
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/login', this.userInfo).then((res) => {
        console.log(res.data.user)
        if (res.data.user) {
          this.$store.dispatch('user/setUser', res.data.user)
          this.$q.notify({
            color: 'primary',
            textColor: 'white',
            icon: 'mdi-lock-open-outline',
            message: `Welcome ${res.data.user.id}`
          })
          console.log(this.$store.state.user.authUser)
          this.$router.push('/')
        } else if (res.data.message) {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: res.data.message
          })
          this.userInfo.password = ''
        } else {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Some Error'
          })
          this.userInfo.id = ''
          this.userInfo.password = ''
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>

<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <router-view align="center"/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import AppBar from './components/Appbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  created () {
    //
  },
  components: {
    AppBar,
    Footer
  },

  data: () => ({
    //
  })
}
</script>

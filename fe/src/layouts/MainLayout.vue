<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-black" height-hint="98">
      <Header />
      <HeaderMenu />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Header from 'components/Header.vue'
import HeaderMenu from 'components/HeaderMenu.vue'
import Footer from 'components/Footer.vue'

export default {
  name: 'MainLayout',
  components: { Header, HeaderMenu, Footer },
  mounted () {
    this.$socket.on('playlist', (data) => {
      this.$store.dispatch('playlist/reqPlaylist')
    })
    this.$socket.on('filelist', (data) => {
      this.$store.dispatch('filelist/updateFilelist')
    })
  },
  data () {
    return {
      //
    }
  }
}
</script>

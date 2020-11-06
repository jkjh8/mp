<template>
  <q-tabs v-model="tab" align="center">
    <q-route-tab name='home' to="/" label="HOME" />
    <q-route-tab name='playlist' to="/playlist" label="PLAYLIST" />
    <q-route-tab name='filelist' to="/filelist" label="FILELIST" />
    <q-route-tab name='player' to="/player" label="PLAYER SETUP" />
    <q-route-tab name='ipaddr' to="/ipaddr" label="IP ADDRESS" />
  </q-tabs>
</template>

<script>
export default {
  data () {
    return {
      tab: 'home'
    }
  }
}
</script>

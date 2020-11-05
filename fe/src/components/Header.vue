<template>
  <q-header bordered class="bg-white text-black" height-hint="98">
    <q-toolbar>
      <div class="q-pa-md" style="font-size: 2rem">
        <q-icon name="mdi-play-network-outline" class="q-mx-xm" />
        MEDIA SERVER
      </div>
      <q-space />
      <div>
        <q-btn round color="blue-grey-10" icon="mdi-lock-open-outline" />
      </div>
    </q-toolbar>

    <q-tabs v-model="tab" align="center">
      <q-route-tab name='home' to="/" label="HOME" />
      <q-route-tab name='playlist' to="/playlist" label="PLAYLIST" />
      <q-route-tab to="/page3" label="Page Three" />
    </q-tabs>
  </q-header>
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

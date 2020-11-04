<template>
  <v-app-bar app color="white" prominent height="115px">
    <v-container class="pt-3 pb-0 px-3 ma-0">
      <v-row>
        <v-icon size="36px">mdi-play-network-outline</v-icon>
        <h2>MEDIA SERVER</h2>
      </v-row>
      <v-row align="center">
        <v-tabs
          class="sm"
          centered
          background-color="transparent"
          color="grey darken-1"
          mobile-breakpoint=300
        >
          <v-tab
            v-for="link in links"
            :key="link.id"
            :to="link.route"
          >
            {{ link.name }}
          </v-tab>
        </v-tabs>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      { id: 1, name: 'Home', route: '/' },
      { id: 2, name: 'Files', route: '/files' },
      { id: 3, name: 'Player option', route: '/player' },
      { id: 4, name: 'IP Address', route: '/ipaddr' },
      { id: 5, name: 'ABOUT', route: '/about' }
    ]
  })
}
</script>

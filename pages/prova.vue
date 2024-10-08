<template>
  <v-app>
    <!-- Försäkra att `v-app-bar` används för toppbaren -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Application</v-toolbar-title>
    </v-app-bar>

    <!-- Använd `v-main` för att hantera huvudsektionen -->
    <v-main>
      <DrawerMenuLeft />
      <v-container fluid>
        <!-- Här kan du placera din befintliga kod för navigation -->
        <v-bottom-navigation :elevation="0" grow>
          <v-btn value="recent">
            <v-icon>mdi-history</v-icon>
            <span>Recent</span>
          </v-btn>

          <v-btn value="favorites">
            <v-icon>mdi-heart</v-icon>
            <span>Favorites</span>
          </v-btn>

          <v-btn value="nearby">
            <v-icon>mdi-map-marker</v-icon>
            <span>Nearby</span>
          </v-btn>
        </v-bottom-navigation>

        <!-- Andra komponenter kan inkluderas här -->
        <RightSideSuggestions />
        <Stories />
      </v-container>
    </v-main>
    <!-- Använd `v-footer` om du har en footer -->
    <v-footer app>
      <span>Footer content here</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "YourComponentName",
};
</script>

<style scoped>
.v-application {
  height: 100vh; /* Gör att `v-app` täcker hela vyhöjden */
  overflow: auto; /* Förhindra oönskad scrollning */
}

.v-application--wrap {
  min-height: 100%; /* Se till att hela layouten täcks */
}
</style>

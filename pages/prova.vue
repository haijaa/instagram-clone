<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
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
        <Posts />
      </v-container>
    </v-main>

    <v-footer app>
      <span>Footer content here</span>
    </v-footer>
  </v-app>
</template>

<script setup></script>

<style scoped>
.v-application {
  height: 100vh;
  overflow: auto;
}

.v-application--wrap {
  min-height: 100%;
}
</style>

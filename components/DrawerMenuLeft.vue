<template>
  <v-navigation-drawer>
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-container>
      <PostModal />
    </v-container>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
    <v-list-item
      prepend-icon="mdi-home-city"
      title="Home"
      value="home"
      @click="navigateTo(`/landingpage`)"
    ></v-list-item>
  </v-navigation-drawer>
</template>

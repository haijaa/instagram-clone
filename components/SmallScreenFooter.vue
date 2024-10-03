<template>
  <v-container
    class="d-flex align-center justify-space-between position-fixed hidden-md-and-up"
    style="width: 100vw"
  >
    <v-icon
      icon="mdi-home-outline"
      size="25"
      @click="navigateTo(`/landingpage`)"
      style="margin-right: 20px"
    />
    <v-icon icon="mdi-magnify" size="25" />
    <v-icon icon="mdi-plus" />
    <v-icon icon="mdi-at" size="25" />
    <v-icon icon="mdi-menu" size="25" style="margin-right: 20px" />
  </v-container>
</template>

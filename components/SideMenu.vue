<template>
  <v-container class="d-flex flex-column position-fixed" style="height: 88%">
    <v-container class="d-flex flex-column flex-grow-0" style="height: 20%">
      <v-icon icon="mdi-instagram" @click="navigateTo(`/landingpage`)" />
    </v-container>
    <v-container class="d-flex flex-column flex-grow-1" style="height: 60%">
      <v-icon
        icon="mdi-home-outline"
        size="25"
        style="margin-bottom: 10px"
        @click="navigateTo(`/landingpage`)"
      />
      <Searchuser />

      <PostModal />
    </v-container>
    <v-col style="height: 20%" class="d-flex flex-column">
      <v-icon
        icon="mdi-at"
        size="25"
        class="mb-3"
        @click="alert('Du har klickat!')"
      />
      <Settings />
    </v-col>
  </v-container>
  <v-divider />
</template>

<script setup></script>
<!-- <p class="d-none d-md-flex d-lg-flex d-xl-flex ml-4">Post</p> -->

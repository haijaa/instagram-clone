<template>
  <v-container
    class="d-flex flex-column position-fixed hidden-sm-and-down"
    style="height: 100%"
  >
    <v-container class="d-flex flex-column">
      <v-row @click="navigateTo(`/landingpage`)" class="hoverNotUnderline">
        <v-icon icon="mdi-home-outline" size="25" style="margin-bottom: 10px" />
        <p class="hidden-sm-and-down ml-3">Home</p>
      </v-row>
      <Searchuser />
      <PostModal />
      <v-row class="mt-5 hoverNotUnderline" @click="navigateTo(`/messages`)">
        <v-icon
          icon="mdi-email-fast-outline"
          size="23"
          style="margin-bottom: 10px"
        />
        <p class="hidden-sm-and-down ml-3">Messages</p>
      </v-row>
    </v-container>
    <v-container class="d-flex flex-column justify-end">
      <v-row class="hoverNotUnderline" @click="alert('Du har klickat!')">
        <v-icon icon="mdi-at" size="25" class="mb-3" />
        <p class="hidden-sm-and-down ml-3">Threads</p>
      </v-row>
      <Settings />
    </v-container>
  </v-container>
</template>

<script setup></script>

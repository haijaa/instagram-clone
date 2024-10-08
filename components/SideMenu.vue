<template>
  <v-container class="d-flex flex-column position-fixed hidden-sm-and-down">
    <v-container class="d-flex flex-column"> </v-container>
    <v-container class="d-flex flex-column">
      <v-row>
        <v-icon
          icon="mdi-home-outline"
          size="25"
          style="margin-bottom: 10px"
          @click="navigateTo(`/landingpage`)"
        />
        <p class="hidden-sm-and-down ml-3">Home</p>
      </v-row>
      <Searchuser />
      <PostModal />
      <v-row class="mt-5">
        <v-icon
          icon="mdi-email-fast-outline"
          size="23"
          style="margin-bottom: 10px"
          @click="navigateTo(`/messages`)"
        />
        <p class="hidden-sm-and-down ml-3">Messages</p>
      </v-row>
    </v-container>
    <v-col class="d-flex flex-column" style="margin-top: 450px">
      <v-row>
        <v-icon
          icon="mdi-at"
          size="25"
          class="mb-3"
          @click="alert('Du har klickat!')"
        />
        <p class="hidden-sm-and-down ml-3">Threads</p>
      </v-row>
      <Settings />
    </v-col>
  </v-container>
</template>

<script setup></script>

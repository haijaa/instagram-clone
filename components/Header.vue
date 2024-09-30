<template>
  <v-container class="w-100 h-25 d-flex flex-row justify-space-between">
    <h1 class="font-size-45">Instagram</h1>

    <v-container class="d-flex flex-row-reverse"> </v-container>
    <v-col v-if="sharedState.userName" class="d-flex flex-column align-center">
      <NuxtLink
        style="text-decoration: none"
        :to="`/user/${sharedState.userName}`"
      >
        <v-card-title class="font-weight-bold">
          {{ sharedState.userName }}
        </v-card-title>
      </NuxtLink>
      <div class="d-flex flex-row" @click="logOutButton()">
        <v-btn text="Log out" size="small" variant="plain"> </v-btn>
        <v-icon icon="mdi-logout" />
      </div>
    </v-col>
  </v-container>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";
const sharedState = inject("sharedState");
sharedState.userName = nuxtStorage.localStorage.getData("loginUsername");

const logOutButton = () => {
  navigateTo("/");
  sharedState.userName = nuxtStorage.localStorage.setData("loginUsername", "");
};
</script>

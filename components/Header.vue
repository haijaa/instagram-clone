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
    </v-col>
  </v-container>
</template>

<script setup>
const sharedState = inject("sharedState");
</script>

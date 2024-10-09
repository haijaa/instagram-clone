<template>
  <v-container class="d-flex flex-column" style="width: 60%;">
    <div class="d-flex justify-start align-center mb-2">
      <div class="d-flex flex-column align-center mb-10 mt-10">
        <v-icon icon="mdi-plus-circle-outline" color="grey" size="70" class="hoverNotUnderline"/>
        <p class="thinSmall">New</p>
      </div>
    </div>
    <v-divider />
    <v-row style="min-width: 200px" class="mt-1 justify-space-evenly">
      <div
        v-for="item in tabs.links"
        class="hoverBox d-flex justify-center align-center"
      >
        <v-icon size="15" :icon="item.icon" />
        <p class="thinSmall">{{ item.name }}</p>
      </div>
    </v-row>
  </v-container>
</template>

<script setup>
const tabs = {
  links: [
    {
      name: "POSTS",
      icon: "mdi-grid",
    },
    {
      name: "SAVED",
      icon: "mdi-bookmark-outline",
    },
    {
      name: "TAGGED",
      icon: "mdi-account-outline",
    },
  ],
};
</script>

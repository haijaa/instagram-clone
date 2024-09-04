<template>
  <v-card class="w-100">
    <img src="../assets/images/logo-login.png" style="margin-left: 150px" />
    <v-col v-if="stories" v-for="story in stories" :key="story">
      <v-card-text>
        {{ story.image }}
      </v-card-text>
      <v-card-text>
        {{ story.person }}
      </v-card-text>
    </v-col>
  </v-card>
</template>

<script setup>
const stories = {
  image: "HEJ",
  person: "Anton Karlsson",
};
</script>

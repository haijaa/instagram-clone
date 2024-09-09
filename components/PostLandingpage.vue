<template>
  <!-- <img src="../assets/images/leftside-menu.png" class="position-fixed" /> -->
  <v-container class="d-flex flex-column justify-space-evenly position-fixed">
    <v-icon
      icon="mdi-home"
      size="35"
      style="color: black; margin-bottom: 10px"
      @click="refreshPage"
    />

    <Searchuser />
    <v-icon icon="mdi-like" size="35" />
  </v-container>
  <v-container class="d-flex justify-center flex-column align-center">
    <v-card
      class="d-flex justify-center flex-column align-center mt-15"
      v-for="content in post.users"
      :key="content.id"
    >
      <v-container class="d-flex flex-row justify-space-between align-center">
        <v-container class="d-flex flex-start flex-row align-center">
          <v-card-title>{{ content.user }} </v-card-title>
          <v-card-subtitle>• 2 hours ago</v-card-subtitle>
        </v-container>
        <img
          src="../assets/images/more-options-post.png"
          style="height: 25px; width: 25px"
        />
      </v-container>
      <img
        :src="content.picture"
        style="height: 500px; width: 400px; margin-bottom: 25px"
      />
      <v-container class="d-flex justify-space-between w-100">
        <img
          src="../assets/images/like-posts.png"
          style="width: 40px; height: 25px"
        />
        <img
          src="../assets/images/comment-posts.png"
          style="width: 40px; height: 25px"
        />
        <img
          src="../assets/images/share-posts.png"
          style="width: 40px; height: 25px"
        />
        <v-container class="align-center justify-end d-flex">
          <img
            src="../assets/images/save-posts.png"
            style="width: 25px; height: 25px"
          />
        </v-container>
      </v-container>

      <v-card-text class="font-weight-bold" style="margin: 0; padding: 0"
        >{{ content.likes }} likes</v-card-text
      >
      <v-container class="d-flex flex-start flex-row">
        <v-card-text class="font-weight-bold ml-0"
          >{{ content.user }}:
        </v-card-text>
        <v-card-text>{{ content.caption }}</v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>

<script setup>
import { usePost } from "../composables/postData";
const post = usePost();

const refreshPage = () => {
  location.reload();
};
</script>

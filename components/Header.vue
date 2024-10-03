<template>
  <v-container class="h-25 d-flex flex-column justify-space-between">
    For you | Feed
    <v-divider />
    <div class="storiescontainer">
      <v-col v-for="content in post.users" class="storCol">
        <img
          :src="content.profilePic"
          style="width: 50px; height: 45px; border-radius: 50%"
        />
        <p class="thinSmall" style="max-width: 25px">{{ content.user }}</p>
      </v-col>
    </div>
  </v-container>
</template>

<script setup>
import { usePost } from "../composables/postData";
const post = usePost();
</script>

<style>
.storiescontainer {
  display: flex;
  justify-content: center;
}
.storCol {
  flex-grow: 0;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  margin-right: 25px;
}
</style>

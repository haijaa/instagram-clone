<template>
  <v-container class="h-25 d-flex flex-column justify-space-between">
    <p v-show="isMdAndUp">For you | Feed</p>
    <v-menu v-show="isSmAndDown">
      <template v-slot:activator="{ props: activatorprops }">
        <p v-bind="activatorprops" class="hover">
          For you <v-icon icon="mdi-arrow-down" size="15" />
        </p>
      </template>
      <template v-slot:default="{ isActive }">
        <v-list-item>Feed</v-list-item>
      </template>
    </v-menu>
    <div class="storiescontainer overflow-auto">
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
import { useDisplay } from "vuetify";
import { usePost } from "../composables/postData";
const post = usePost();
const display = useDisplay();

const isMdAndUp = computed(() => display.mdAndUp);
const isSmAndDown = computed(() => display.smAndDown);
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

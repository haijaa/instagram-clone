<template>
  <v-container class="d-flex flex-column justify-space-between" min-height="150px" max-width="80%" >
    
    <div class="storiescontainer overflow-auto">
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
    <v-divider />
   <v-container class="d-flex">
      <v-container v-for="content in post.users" class="storiesSmallContainer">
        <img
          :src="content.profilePic"
          style="width: 50px; height: 45px; border-radius: 50%"
        />
        <p class="thinSmall" style="max-width: 25px">{{ content.user }}</p>  
      </v-container>
    </v-container>
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
  flex-direction: column;
  justify-content: center;
}
.storiesSmallContainer {
  flex-grow: 0;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
</style>

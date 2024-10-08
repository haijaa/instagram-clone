<template>
  <Stories :storyPost="storyPost" />
  <v-container
    class="d-flex flex-column justify-space-between"
    min-height="150px"
    max-width="80%"
  >
    <div class="storiescontainer overflow-auto">
      <p class="hidden-sm-and-down">For you | Feed</p>
      <v-menu v-show="isSmAndDown">
        <template v-slot:activator="{ props: activatorprops }">
          <p v-bind="activatorprops" class="hover hidden-md-and-up">
            For you <v-icon icon="mdi-arrow-down" size="15" />
          </p>
        </template>
        <template v-slot:default="{ isActive }">
          <v-list-item>Feed</v-list-item>
        </template>
      </v-menu>
      <v-divider />
      <v-container class="d-flex">
        <v-container
          v-for="content in filteredPosts"
          class="storiesSmallContainer"
        >
          <img
            :src="content.profilePic"
            class="profilePicStories"
            @click="
              openDialog();
              getRightStory(content.id);
            "
          />
          <p class="thinSmall" style="max-width: 25px">
            {{ shortenName(content.user) }}
          </p>
        </v-container>
      </v-container>
    </div>
  </v-container>
</template>

<script setup>
const props = defineProps({
  storyPost: Object,
});

import { useDisplay } from "vuetify";
import { usePost } from "../composables/postData";
import { useStories } from "../composables/HandleState";

const dialog = useStories();
const post = usePost();
const display = useDisplay();
const storyPost = ref([]);

const isMdAndUp = computed(() => display.mdAndUp);
const isSmAndDown = computed(() => display.smAndDown);

const shortenName = (name) => {
  return name.length > 6 ? name.substring(0, 6) + ".." : name;
};

const value = ref(0);
const bufferValue = ref(0);

const openDialog = () => {
  dialog.value = true;
  value.value = 0;
  bufferValue.value = 0;

  let progressInterval = setInterval(() => {
    if (value.value >= 100) {
      clearInterval(progressInterval);
      dialog.value = false;
    } else {
      value.value += 1;
      bufferValue.value = value.value + 1;
    }
  }, 100);
};

const filteredPosts = post.users.filter((i) => i.story === true);
console.log(filteredPosts, "här är filtrerade posts");

const getRightStory = (postId) => {
  if (postId) {
    storyPost.value = filteredPosts.filter((i) => i.id === postId);
    console.log(storyPost.value, "header");
  }
};
</script>

<style></style>

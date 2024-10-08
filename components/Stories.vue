<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:default="{ isActive }">
      <v-container class="d-flex justify-center align-center" v-for="(item, index) in props.storyPost" :key="index">
        <v-icon
          icon="mdi-arrow-left-circle"
          class="mr-4 hoverNotUnderline"
          size="25"
          color="white"
        />
        <v-card class="storyContainer" :style="{backgroundImage: `url(${item.stories[0].pic})`} ">
          <v-container>
            <p class="mt-2 ml-3 smallTextBold d-flex flex-row justify-space-between" style="color: white">
              {{ item.user }}
              <p class="ml-3">24m sedan</p>
            </p>

            <v-progress-linear
              :value="value"
              rounded
              :buffer-value="bufferValue"
              style="background-color: white"
            />
          </v-container>
          <v-container class="d-flex align-center justify-center mb-2">
            <input
              type="text"
              style="
                background-color: transparent;
                border-radius: 5px;
                border: 2px solid white;
              "
              placeholder="Answer user.."
            />
            <v-icon
              icon="mdi-heart-outline"
              class="mr-3 ml-3"
              style="color: white"
            />
            <v-icon icon="mdi-send-outline" style="color: white" />
          </v-container>
        </v-card>
        <v-icon
          icon="mdi-arrow-right-circle"
          class="ml-4 hoverNotUnderline"
          size="25"
          color="white"
        />
      </v-container>
    </template>
  </v-dialog>
</template>

<script setup>
import { usePost } from "../composables/postData";

const props = defineProps({
  storyPost: Object,
});

const dialog = useStories();
</script>

<style>
::placeholder {
  color: white;
}

.storyContainer {
  /* background-image: url("../assets/images/andraBild.png"); */
  background-size: cover;
  background-repeat: no-repeat;
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

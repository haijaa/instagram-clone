<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="Open Dialog"
        variant="flat"
        @click="openDialog"
      >
        Open Dialog
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-container class="d-flex justify-center align-center">
        <v-icon
          icon="mdi-arrow-left"
          class="mr-2 hoverNotUnderline"
          size="25"
        />
        <v-card class="storyContainer">
          <v-container>
            <p class="mt-2 ml-3 smallTextBold">Antkarl 24m sedan</p>
            <v-progress-linear
              :value="value"
              rounded
              :buffer-value="bufferValue"
              color="white"
              style="background-color: black"
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
            <v-icon icon="mdi-heart-outline" class="mr-3 ml-3" />
            <v-icon icon="mdi-send-outline" />
          </v-container>
        </v-card>
        <v-icon
          icon="mdi-arrow-right"
          class="ml-2 hoverNotUnderline"
          size="25"
        />
      </v-container>
    </template>
  </v-dialog>
</template>

<script setup>
import imgStory from "../assets/images/picture-post.png";

const dialog = ref(false);
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
</script>

<style>
::placeholder {
  color: white;
}

.non-transparent-progress .v-progress-linear__bar {
  opacity: 1 !important;
}

.storyContainer {
  background-image: url("../assets/images/andraBild.png");
  background-size: cover;
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

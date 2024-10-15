<template>
  <v-container class="d-flex" style="width: 100vw">
    <v-container class="d-flex flex-column" style="width: 80%">
      <Header />
      <UserLoggedInControl v-if="logInPrompt" />
      <v-container class="d-flex justify-center flex-column align-center">
        <Posts />
      </v-container>
    </v-container>
    <RightSideSuggestions class="hidden-sm-and-down mt-7" />
  </v-container>

  <ScrollToTopButton />
</template>

<script setup>
import { isUserLoggedIn } from "~/composables/Functions";
import { useStories } from "../composables/HandleState";
const sharedState = inject("sharedState");
const logInPrompt = ref(false);
const dialog = useStories();

isUserLoggedIn(sharedState.userName, logInPrompt);

defineProps({
  userInformation: String,
});

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

<style></style>

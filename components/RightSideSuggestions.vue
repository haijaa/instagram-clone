<template>
  <v-container style="max-width: 310px">
    <v-row>
      <v-row class="align-center">
        <img :src="loggedInUser.profilePic" class="pic" />
        <v-col>
          <p
            class="boldSmall"
            @click="navigateTo(`/user/${loggedInUser.username}`)"
          >
            {{ loggedInUser.username }}
          </p>
          <p class="thinSmall">{{ loggedInUser.fullname }}</p>
        </v-col>
      </v-row>
      <v-col>
        <p class="smallBlue">Switch</p>
      </v-col>
      <v-row
        class="mb-2 mt-3 justify-space-between"
        style="max-width: 257px; padding: 0; margin: 0"
      >
        <v-card-subtitle class="m-0 p-0">Suggestions for you </v-card-subtitle>
        <p class="boldSmall" @click="showSuggestions = !showSuggestions">
          {{ showSuggestions ? "Hide all" : "Show all" }}
        </p>
      </v-row>
    </v-row>

    <v-row
      class="justify-space-between d-flex align-center"
      style="min-width: 300px"
      v-for="(item, index) in userInformation"
      :key="index"
      v-if="showSuggestions"
    >
      <v-row class="align-center">
        <img :src="item.profilePic" class="pic" />
        <v-col style="width: 110px">
          <p
            class="boldSmall"
            @click="navigateTo(`/user/${loggedInUser.username}`)"
          >
            {{ item.username }}
          </p>
          <p class="thinSmall">{{ item.fullname }}</p>
        </v-col>
      </v-row>
      <v-col style="width: 75px">
        <p class="smallBlue" @click="followedOrNot = !followedOrNot">
          {{ followedOrNot ? "Follow" : "Unfollow" }}
        </p>
      </v-col>
    </v-row>
    <div style="margin-right: 50px">
      <v-container
        class="d-flex justify-start align-center flex-wrap mt-3"
        style="min-width: 100px; padding: 0"
      >
        <p class="thinSmall" v-for="link in links">{{ link + "" }}·</p>
      </v-container>
      <v-container class="d-flex justify-start">
        <p class="thinSmall">© 2024 Instagram from Meta</p>
      </v-container>
    </div>
  </v-container>
</template>

<script setup>
import { getValue } from "../composables/Functions";
const userInformation = ref([]);
const loggedInUser = ref([]);
const followedOrNot = ref(true);
const showSuggestions = ref(true);

const links = [
  "About",
  "Help",
  "Press",
  "API",
  "Work",
  "Integrity",
  "Conditions",
  "Location",
  "Langugage",
  "Meta verified",
];

const fetchUsers = async () => {
  const data = await $fetch(`/api/userDatabase`);
  const loginUsername = getValue("loginUsername");
  const remainingUsers = data.users.filter((i) => i.username !== loginUsername);
  userInformation.value = remainingUsers;
  console.log(userInformation);
};
fetchUsers();

const fetchLoggedInUser = async () => {
  const data = await $fetch(`/api/userDatabase`);
  const loginUsername = getValue("loginUsername");
  const user = data.users.find((i) => i.username === loginUsername);
  loggedInUser.value = user;
};
fetchLoggedInUser();
</script>

<style></style>

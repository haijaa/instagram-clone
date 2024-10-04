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
  </v-container>
</template>

<script setup>
import { getValue } from "../composables/Functions";
const userInformation = ref([]);
const loggedInUser = ref([]);
const followedOrNot = ref(true);
const showSuggestions = ref(true);

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

<style>
.smallBlue {
  font-weight: bold;
  font-size: small;
  color: #4cb5f9;
  max-width: 50px;
}
.smallBlue:hover {
  cursor: pointer;
  text-decoration: underline;
}
.boldSmall {
  font-size: small;
  font-weight: bold;
  max-width: 80px;
  margin-right: 20px;
}
.boldSmall:hover {
  cursor: pointer;
  text-decoration: underline;
}
.thinSmall {
  font-weight: thin;
  font-size: small;
}
.pic {
  width: 40px;
  height: 30px;
  border-radius: 50%;
}
</style>

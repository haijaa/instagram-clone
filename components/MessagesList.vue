<template>
  <div class="w-25 ml-5" style="min-width: 200px">
    <v-row class="d-flex justify-space-between mt-5">
      <p>{{ loggedInUser.username }}<v-icon icon="mdi-chevron-down" /></p>

      <v-icon icon="mdi-pencil-box-outline" />
    </v-row>
    <v-row class="align-center mt-10" style="height: 70px">
      <v-col style="margin: 0; padding: 0">
        <img
          style="width: 60px; height: 50px; border-radius: 50%"
          :src="post.profilePic"
        />
        <p class="thinSmall">Your note</p>
      </v-col>
    </v-row>
    <v-row class="justify-space-between mt-10">
      <p class="boldSmall">Messages</p>
      <v-card-subtitle style="margin: 0; padding: 0">Requests</v-card-subtitle>
    </v-row>
    <div
      class="d-flex align-center justify-start mt-5"
      v-for="(item, index) in userInformation"
      :key="index"
    >
      <img class="pic" :src="post.profilePic" />
      <v-col style="margin-left: 10px; padding: 0">
        <p
          class="boldSmall hover"
          @click="navigateTo(`/user/${item.username}`)"
        >
          {{ item.username }}
        </p>
        <v-card-subtitle style="margin: 0; padding: 0"
          >Active 3 hours ago</v-card-subtitle
        >
      </v-col>
    </div>
  </div>
</template>

<script setup>
import { getValue } from "../composables/Functions";
import { usePost } from "../composables/postData";
const post = usePost();
const userInformation = ref([]);
const loggedInUser = ref([]);

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

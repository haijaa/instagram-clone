<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon icon="mdi-magnify" size="35" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-card class="d-flex flex-column justify-center align-center">
        <v-container class="d-flex align-center justify-center w-50">
          <v-text-field
            placeholder="Search user"
            color="surface-variant"
            class="w-50 mt-2"
            variant="underlined"
            v-model="state.searchedUser"
            @keyup.enter="getUser"
          />
          <v-icon icon="mdi-magnify" size="35" class="ml-5" @click="getUser" />
        </v-container>
        <v-card-text v-if="search" style="color: red">{{
          errorMessage
        }}</v-card-text>
      </v-card>
      <v-card v-if="state.filteredUser">
        <v-card-title>Posts by {{ state.filteredUser.user }}</v-card-title>
        <v-row>
          <v-col
            v-for="(post, index) in state.filteredUser.posts"
            :key="index"
            cols="6"
            class="d-flex flex-column align-center"
          >
            <img
              :src="post.picture"
              style="height: 250px; width: 200px; margin-bottom: 25px"
            />
            <v-card-subtitle class="font-weight-bold"
              >Caption: {{ post.caption }}</v-card-subtitle
            >
            <v-card-subtitle>Likes: {{ post.likes }}</v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
      <v-container class="d-flex flex-row justify-end">
        <v-btn
          text="CLOSE"
          @click="isActive.value = false"
          variant="elevated"
          color="error"
          style="width: 25px"
        />
      </v-container>
    </template>
  </v-dialog>
</template>

<script setup>
import { usePost } from "../composables/postData";
import { reactive } from "vue";

const search = ref(false);
const errorMessage = "No user by that name, try another";

const posts = usePost();
const state = reactive({
  searchedUser: "",
  filteredUser: null,
});

function getUser() {
  state.filteredUser = posts.users.find(
    (user) => user.user.includes(state.searchedUser.toLocaleLowerCase()),
    (search.value = false)
  );
  if (state.filteredUser) {
    console.log(state.filteredUser);
  } else {
    search.value = true;
  }
}
</script>

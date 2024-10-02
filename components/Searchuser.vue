<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon icon="mdi-magnify" size="25" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-card class="w-50 ml-15 mt-0">
        <v-card-title>Search</v-card-title>
        <v-divider />
        <v-container class="d-flex justify-center align-center">
          <input type="text" placeholder="Search" style="width: 80%;" v-model="state.searchedUser">
          <v-icon icon="mdi-magnify" @click="getUser()"/>
        </input>
        </v-container>
        <v-container v-if="state.filteredUser.length > 0">
          Results for {{ state.searchedUser }}
          <v-list>
            <v-container v-for="userFound in state.filteredUser" class="d-flex flex-row">
              <p class="hover" @click="navigateTo(`/user/${userFound.user}`)">{{ userFound.user }}</p>
              <v-card-subtitle> - {{ userFound.posts.length }} posts</v-card-subtitle>
            </v-container>
          </v-list>
        </v-container>
        <v-container class="d-flex justify-center align-center" v-if="state.filteredUser.length === 0 && state.searchedUser.length > 3">
          <p style="color: red;">{{ errorMessage }}</p>
        </v-container>
      </v-card>
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
  filteredUser: [],
});

function getUser() {
  state.filteredUser = posts.users.filter(
    (user) => user.user.includes(state.searchedUser.toLocaleLowerCase()),
    (search.value = false)
  );
  if (state.filteredUser) {
    console.log(state.filteredUser);
  } else {
    search.value = true;
  }
}

watch(
  () => state.searchedUser,
  (newValue) => {
    if (newValue.length >= 2) {
      getUser();
    } else {
      state.filteredUser = [];
    }
  }
);
</script>

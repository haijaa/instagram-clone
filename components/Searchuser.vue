<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon icon="mdi-magnify" size="25" v-bind="activatorProps" />
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
        <v-card-text v-if="search" style="color: red; height: 300px">{{
          errorMessage
        }}</v-card-text>
      </v-card>
      <v-card v-if="state.filteredUser" style="height: 300px">
        <v-card-title>Results for {{ state.searchedUser }}</v-card-title>
        <NuxtLink
          v-for="userFound in state.filteredUser"
          :key="userFound.id"
          @click="navigateTo(`/user/${userFound.user}`)"
        >
          {{ userFound.user }}
        </NuxtLink>
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

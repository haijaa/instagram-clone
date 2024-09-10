<template>
  <v-container class="w-100 h-25 d-flex flex-row justify-space-between">
    <img
      src="../assets/images/logo-login.png"
      style="margin: 0; padding: 0"
      @click="navigateTo('/')"
    />

    <v-container
      class="d-flex flex-row-reverse"
      v-if="$route.path === '/landingpage'"
    >
      <PostModal />
    </v-container>
    <v-col v-if="$route.path === '/landingpage'">
      <v-card-title class="font-weight-bold">
        {{ sharedState.userName }}
      </v-card-title>
      <NuxtLink :to="'/'">
        <v-card-subtitle class="font-weight-thin"> Log out </v-card-subtitle>
      </NuxtLink>
    </v-col>
  </v-container>
</template>

<script setup>
const sharedState = inject("sharedState");

let userData = reactive({
  fullname: "",
  username: "",
  password: "",
});

const { data, error } = await useFetch("/api/userDatabase");
console.log(data.value);

if (data.value) {
  Object.assign(userData, data.value);
} else {
  console.log("Detta är fel: ", error.value);
}
</script>

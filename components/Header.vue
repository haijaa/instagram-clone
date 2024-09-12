<template>
  <v-container class="w-100 h-25 d-flex flex-row justify-space-between">
    <h1 class="font-size-45">Instagram</h1>

    <v-container class="d-flex flex-row-reverse"> </v-container>
    <v-col
      v-if="$route.path === '/landingpage' && sharedState.userName"
      class="d-flex flex-column align-center"
    >
      <v-card-title class="font-weight-bold">
        {{ sharedState.userName }}
      </v-card-title>
      <div class="d-flex flex-row" @click="navigateTo('/')">
        <v-btn text="Log out" size="small" variant="plain"> </v-btn>
        <v-icon icon="mdi-logout" />
      </div>
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

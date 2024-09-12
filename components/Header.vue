<template>
  <v-container class="w-100 h-25 d-flex flex-row justify-space-between">
    <!-- <img
      src="../assets/images/logo-login.png"
      style="margin: 0; padding: 0"
      @click="navigateTo('/')"
    /> -->
    <h1 class="font-size-45">Instagram</h1>

    <v-container class="d-flex flex-row-reverse">
      <v-switch
        @click="toggleTheme()"
        :label="theme.global.current.value.dark ? 'dark' : 'light'"
      />
    </v-container>
    <v-col
      v-if="$route.path === '/landingpage'"
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
import { useTheme } from "vuetify";
const theme = useTheme();

const sharedState = inject("sharedState");

let userData = reactive({
  fullname: "",
  username: "",
  password: "",
});

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

const { data, error } = await useFetch("/api/userDatabase");
console.log(data.value);

if (data.value) {
  Object.assign(userData, data.value);
} else {
  console.log("Detta är fel: ", error.value);
}
</script>

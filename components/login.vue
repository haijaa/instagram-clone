<template>
  <v-container class="d-flex justify-center align-center flex-column">
    <v-card class="w-50 d-flex justify-center flex-column">
      <v-col>
        <v-card-title class="d-flex align-center justify-center">
          <img src="/assets/images/logo-login.png" alt="instagram-logo" />
        </v-card-title>
      </v-col>
      <v-card-subtitle>
        <v-col class="d-flex flex-column w-100">
          <v-text-field
            label="Phone number, username or email"
            v-model="sharedState.userName"
            @input="wrongUser = false"
            variant="underlined"
          />
          <v-text-field
            type="password"
            label="Password"
            v-model="sharedState.password"
            @keyup.enter="doesUserExist()"
            variant="underlined"
          />
          <v-card-text v-if="wrongUser" style="color: red">{{
            errorMessage
          }}</v-card-text>
          <v-card-text>
            <v-btn @click="doesUserExist()" color="primary" class="w-100">
              Log in
            </v-btn>
          </v-card-text>
        </v-col>
      </v-card-subtitle>
      <v-divider class="w-80"></v-divider>
      <v-container class="d-flex flex-justify-center align-center flex-column">
        <v-card-text class="d-flex justify-center">
          <v-icon color="primary" class="mr-1">mdi-facebook</v-icon>
          <p class="font-weight-bold" style="color: #1867c0">
            Log in with Facebook
          </p>
        </v-card-text>
        <v-col class="justify-center d-flex">
          <NuxtLink :to="'/accounts/forgotPassword'">
            <p class="font-weight-bold" style="color: #1867c0">
              Forgot password?
            </p>
          </NuxtLink>
        </v-col>
        <v-card-text class="font-weight-light">
          You can also report content you believe is unlawful in your country
          without logging in.
        </v-card-text>
      </v-container>
    </v-card>
    <v-card class="w-50 mt-3">
      <v-card-text class="d-flex flex-row justify-center">
        Dont have an account?
        <NuxtLink :to="'/accounts/createNew'">
          <p class="ml-2 font-weight-bold" style="color: #1867c0">Sign up</p>
        </NuxtLink>
      </v-card-text>
    </v-card>
    <v-container class="d-flex flex-column align-center justify-center">
      Get the app.
      <v-container class="d-flex flex-row justify-center align-center">
        <img
          src="/assets/images/get-app-android.png"
          alt="get on google play"
        />
        <img
          src="/assets/images/get-app-microsoft.png"
          alt="get on microsoft"
          style="margin-left: 15px"
        />
      </v-container>
    </v-container>
  </v-container>
</template>

<script setup>
import { storeValue } from "~/composables/Functions";

definePageMeta({
  layout: "plain",
});

const sharedState = inject("sharedState");
const wrongUser = ref(false);

const errorMessage = "Wrong username or password";

const doesUserExist = async () => {
  const data = await $fetch(`/api/userDatabase`);
  console.log(data);
  const user = data.users.find(
    (user) =>
      user.username === sharedState.userName &&
      user.password === sharedState.password
  );
  if (user) {
    navigateTo("/landingpage");
    sharedState.password = "";
    storeValue("loginUsername", sharedState.userName);
  } else {
    console.log("Finns ingen sådan användare/fel lösenord");
    wrongUser.value = true;
  }
};
</script>

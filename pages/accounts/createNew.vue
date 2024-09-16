<template>
  <v-container
    class="d-flex justify-center align-center flex-column flex-grow-2"
  >
    <v-card class="w-50 d-flex justify-center flex-column">
      <v-col>
        <v-card-title class="d-flex align-center justify-center flex-column">
          <img src="/assets/images/logo-login.png" alt="instagram-logo" />
          <v-card-text>
            Sign up to see photos and videos from your friends.
          </v-card-text>
          <v-btn class="w-100" color="primary" v-if="!success">
            <v-icon class="mr-1">mdi-facebook</v-icon>
            Log in with Facebook
          </v-btn>
        </v-card-title>
      </v-col>

      <v-card-subtitle v-if="!success">
        <v-col class="d-flex flex-column w-100">
          <v-text-field
            label="Mobile Number or Email (optional)"
            variant="underlined"
          />
          <v-text-field
            type="text"
            label="Full Name *"
            v-model="userData.fullname"
            variant="underlined"
          />
          <v-text-field
            type="text"
            label="Username *"
            v-model="userData.username"
            @input="wrongUsername = false"
            variant="underlined"
          />
          <v-text-field
            type="Password"
            label="Password *"
            v-model="userData.password"
            @keyup.enter="createUser()"
            variant="underlined"
          />
        </v-col>
      </v-card-subtitle>
      <v-card-text
        v-if="wrongUsername"
        style="color: red"
        class="d-flex justify-center align-center"
      >
        {{ errorMessage }}
      </v-card-text>
      <v-card-text
        v-if="success"
        style="color: green"
        class="d-flex justify-center align-center flex-column"
      >
        {{ successMessage }}
        <v-btn @click="navigateTo('/')" color="success" text="LOGIN" />
      </v-card-text>
      <v-container
        class="d-flex flex-justify-center align-center flex-column"
        v-if="!success"
      >
        <v-col class="justify-center d-flex">
          <v-card-text class="d-flex justify-center">
            People who use our service may have uploaded your contact
            information to Instagram.
          </v-card-text>
        </v-col>
        <v-col class="justify-center d-flex">
          <v-card-text>
            By signing up, you agree to our Terms. Learn how we collect, use and
            share your data in our Privacy Policy and how we use cookies and
            similar technology in our Cookies Policy
          </v-card-text>
        </v-col>
        <NuxtLink>
          <v-btn class="w-100" color="primary" @click="createUser()">
            Create account
          </v-btn>
        </NuxtLink>
        <v-card-text>
          You can also report content you believe is unlawful in your country
          without logging in.
        </v-card-text>
      </v-container>
    </v-card>
    <v-card class="w-50 mt-3">
      <v-card-text class="d-flex flex-row justify-center" v-if="!success">
        Have an account?
        <NuxtLink :to="'/'">
          <p class="ml-2 font-weight-bold" style="color: #1867c0">Log in</p>
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
const success = ref(false);
const wrongUsername = ref(false);

const successMessage =
  "Account created, return to login with the botton below.";
const errorMessage = "User exist already, try again.";

const userData = reactive({
  fullname: "",
  username: "",
  password: "",
});

const url = "/api/userDatabase";

const createUser = async () => {
  const response = await $fetch("/api/userDatabase");
  const existingUser = response.users.find(
    (user) => user.username === userData.username
  );

  if (existingUser) {
    console.log("Användare finns redan");
    wrongUsername.value = true;
    return;
  }

  try {
    await $fetch(url, {
      method: "POST",
      body: {
        fullname: userData.fullname,
        username: userData.username,
        password: userData.password,
      },
    });

    console.log("Användare skapad.");
    wrongUsername.value = false;
    success.value = true;
  } catch (error) {
    console.error("Kunde inte skapa användare:", error);
  }
};
</script>

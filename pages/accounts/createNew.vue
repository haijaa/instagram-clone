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
          <v-btn class="w-100" color="primary">
            <v-icon class="mr-1">mdi-facebook</v-icon>
            Log in with Facebook
          </v-btn>
        </v-card-title>
      </v-col>

      <v-card-subtitle>
        <v-col class="d-flex flex-column w-100">
          <v-text-field label="Mobile Number or Email (optional)" />
          <v-text-field
            type="text"
            label="Full Name *"
            v-model="userData.fullname"
          />
          <v-text-field
            type="text"
            label="Username *"
            v-model="userData.username"
          />
          <v-text-field
            type="Password"
            label="Password *"
            v-model="userData.password"
            @keyup.enter="createUser()"
          />
        </v-col>
      </v-card-subtitle>
      <v-container class="d-flex flex-justify-center align-center flex-column">
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
      <v-card-text class="d-flex flex-row justify-center">
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
const userData = reactive({
  fullname: "",
  username: "",
  password: "",
});

const createUser = async () => {
  const { data, error } = await $fetch("/api/userDatabase.js", {
    method: "POST",
    body: {
      fullname: userData.fullname.value,
      username: userData.username.value,
      password: userData.password.value,
    },
  });
  if (error.value) {
    message.value = "Error creating user";
  } else {
    message.value = "User created successfully!";
    console.log(data);
  }
};
</script>

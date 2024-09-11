<template>
  <v-container class="d-flex justify-center align-center flex-column">
    <v-card class="w-50 d-flex justify-center flex-column align-center">
      <img
        src="../../assets/images/lock-forgot-password-screen.png"
        style="width: 90px; height: 80px; margin-top: 25px"
      />
      <v-card-text class="font-weight-bold"> Trouble logging in? </v-card-text>
      <v-card-text
        >Enter your email, phone, or username and we'll send you a link to get
        back into your account.</v-card-text
      >
      <v-container class="w-80">
        <v-text-field
          label="Username"
          variant="underlined"
          v-model="sharedState.userName"
          @input="
            wrongUser = false;
            rightUser = false;
          "
          @keyup.enter="doesUserExists()"
        />
        <v-card-text
          v-if="rightUser"
          class="d-flex justify-center align-center"
          style="color: green"
        >
          {{ successMessage }}
        </v-card-text>
        <v-card-text
          v-if="wrongUser"
          class="d-flex justify-center align-center"
          style="color: red"
        >
          {{ errorMessage }}
        </v-card-text>
        <v-btn
          v-if="!rightUser"
          class="w-100"
          color="primary"
          @click="doesUserExists()"
          text="SEND LOGIN LINK"
        />
        <v-btn
          v-if="rightUser"
          class="w-100"
          color="success"
          text="BACK TO LOGIN"
          @click="
            navigateTo('/');
            sharedState.userName = '';
          "
        />
      </v-container>
      <v-container
        v-if="!rightUser"
        class="justify-center align-center d-flex flex-column"
      >
        <v-card-text class="font-weight-bold" style="color: #1867c0">
          Can't reset your password?</v-card-text
        >
        <v-divider class="w-80">
          <v-card-text>OR</v-card-text>
        </v-divider>
        <NuxtLink :to="'/accounts/createNew'">
          <v-card-text class="font-weight-bold mb-16">
            Create new account
          </v-card-text>
        </NuxtLink>
      </v-container>
    </v-card>
    <v-card
      class="w-50 mt-5"
      style="background-color: #fafafa"
      v-if="!rightUser"
    >
      <NuxtLink :to="'/'">
        <v-card-text class="justify-center d-flex font-weight-bold">
          Back to login
        </v-card-text>
      </NuxtLink>
    </v-card>
  </v-container>
</template>

<script setup>
const sharedState = inject("sharedState");
const wrongUser = ref(false);
const rightUser = ref(false);
const errorMessage = "Cant find user, try again with a different one";
const successMessage = "We have sent a reset link to your mail";

const doesUserExists = async () => {
  const data = await $fetch("/api/userDatabase");
  const validUser = data.users.find(
    (validUser) => validUser.username === sharedState.userName
  );
  if (validUser) {
    console.log("Lösenord skickat");
    rightUser.value = true;
  } else {
    wrongUser.value = true;
  }
};
</script>

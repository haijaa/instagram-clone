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
        <v-text-field label="Email, Phone or Username"> </v-text-field>
        <v-btn class="w-100" color="primary">Send login link</v-btn>
      </v-container>
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
    </v-card>
    <v-card class="w-50" style="background-color: #fafafa">
      <NuxtLink :to="'/'">
        <v-card-text class="justify-center d-flex font-weight-bold">
          Back to login
        </v-card-text>
      </NuxtLink>
    </v-card>
  </v-container>
  <footerLayout />
</template>

<script setup>
import footerLayout from "../layouts/footerLayout.vue";
</script>

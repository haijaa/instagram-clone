<template>
  <v-dialog max-width="500">
    <v-card class="d-flex justify-center align-center">
      <strong class="mt-10">Need to be logged in to browse our site</strong>
      <p>Click the button below</p>
      <v-btn
        text="LOG IN"
        @click="
          navigateTo('/');
          load;
        "
        variant="flat"
        :loading="loading"
        color="primary"
        height="25"
        class="mt-10 mb-10"
      />
    </v-card>
  </v-dialog>
</template>

<script setup></script>

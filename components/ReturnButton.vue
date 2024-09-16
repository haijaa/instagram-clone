<template>
  <NuxtLink>
    <v-btn
      text="GO BACK"
      @click="$router.go(-1)"
      variant="outlined"
      color="primary"
    />
  </NuxtLink>
</template>

<script setup></script>

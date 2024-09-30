<template>
  <NuxtPage />
</template>

<script setup>
const state = reactive({
  userName: "",
  passWord: "",
  comment: "",
});
provide("sharedState", state);
useHead({
  title: "Instagram",
});
</script>

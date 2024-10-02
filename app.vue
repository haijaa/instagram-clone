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
<style>
@import "./assets/css/global.css";
</style>

<template>
  <NuxtLayout>
    <Header />
    <NuxtPage />
  </NuxtLayout>
  <Footer />
</template>

<script setup>
definePageMeta({
  middleware: ["auth.js", "history"],
});

const state = reactive({
  userName: "",
  passWord: "",
});

provide("sharedState", state);

useHead({
  title: "Instagram",
});
</script>

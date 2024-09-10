<template>
  <NuxtLayout>
    <Header />
    <NuxtPage />
  </NuxtLayout>
  <Footer />
</template>

<script setup>
const state = reactive({
  userName: "",
  passWord: "",
});

provide("sharedState", state);

useHead({
  title: "Instagram",
});
</script>

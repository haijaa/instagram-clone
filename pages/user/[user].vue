<template></template>

<script setup>
let userInformation = ref([]);
const fetchUser = async () => {
  const data = await $fetch("/api/userDatabase");
  userInformation.value = data;
};
fetchUser();
</script>

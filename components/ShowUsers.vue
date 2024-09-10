<template>
  <v-btn text="GET USERS" type="TEXT" @click="getUsers()" />
</template>

<script setup>
let userData = ref([]);
async function getUsers() {
  const data = await $fetch("/api/userDatabase");
  userData = data.users;
  console.log(userData);
}
</script>

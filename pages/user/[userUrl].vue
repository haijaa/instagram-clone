<template></template>

<script setup>
const route = useRoute();
const userFound = ref(null);
const fetchUser = async () => {
  const data = await $fetch(`/api/userDatabase/`);
  console.log(data, "hejhej");
  const user = data.users.find((user) => user.url === route.params.slug);

  if (user) {
    userFound.value = user;
    console.log("Hitta en användare", userFound.value);
  } else {
    console.log("Ingen användare med det namnet.");
  }
};
fetchUser();
</script>

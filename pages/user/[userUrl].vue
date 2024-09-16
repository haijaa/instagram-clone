<template>
  <v-col>
    <v-container
      class="d-flex flex-column justify-space-between position-fixed"
    >
      <v-icon
        icon="mdi-instagram"
        size="35"
        style="margin-bottom: 10px"
        @click="navigateTo('/landingpage')"
      />
    </v-container>
    <div
      v-if="status === 'pending'"
      class="d-flex justify-center align-center"
      style="height: 80vh"
    >
      <strong>Loading...</strong>
    </div>

    <div
      v-else-if="userFound"
      class="d-flex justfiy-center align-center flex-column"
    >
      <h1>{{ userFound.username }}</h1>
      <v-row class="mb-5 mt-5">
        <p>Followers: {{ userFound.page.followers }}</p>
        <p class="ml-5">Following: {{ userFound.page.following }}</p>
      </v-row>
      <strong>{{ userFound.page.presentation }}</strong>
      <div
        v-if="userPosts"
        class="mt-10 d-flex flex-row justify-center align-center flex-space-evenly"
      >
        <div
          v-for="(post, index) in userPosts"
          class="d-flex flex-column justify-center align-center"
        >
          <img :src="post.picture" style="width: 80%" />
          <p>{{ post.caption }}</p>
          <p><v-icon icon="mdi-heart-outline" />{{ post.likes }}</p>
        </div>
      </div>
    </div>
    <div v-else class="d-flex justify-center align-center" style="height: 80vh">
      <strong>Oops, no result for {{ route.params.userUrl }} </strong>
    </div>
  </v-col>
</template>

<script setup>
const route = useRoute();
const post = usePost();

const status = ref("pending");
const userFound = ref(null);

const fetchUser = async () => {
  const data = await $fetch(`/api/userDatabase/`);
  const user = data.users.find((user) => user.url === route.params.userUrl);

  if (user) {
    userFound.value = user;
    console.log("Hitta en användare", userFound.value);
    status.value = "success";
  } else {
    console.log("Ingen användare med det namnet.");
    status.value = "error";
  }
};
fetchUser();

const userPosts = computed(() => {
  return post.users.find((p) => p.user === route.params.userUrl).posts || null;
});
</script>

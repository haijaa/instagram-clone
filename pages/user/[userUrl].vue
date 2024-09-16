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
          id="allPosts"
          v-for="(post, index) in userPosts"
          class="d-flex flex-column justify-space-evenly align-center"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div style="height: 300px; width: 300px; margin: 25px">
              <v-img
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
                :elevation="isHovering ? 12 : 2"
                :src="post.picture"
                id="picturePost"
                class="d-flex align-center justify-center"
              >
                <p v-if="isHovering" id="cardLikes">
                  <v-icon icon="mdi-heart-outline" />{{ post.likes }}
                </p>
              </v-img>
              <v-card-subtitle class="justify-start">{{
                post.caption
              }}</v-card-subtitle>
            </div>
          </v-hover>
        </div>
      </div>
    </div>
    <div
      v-else
      class="d-flex justify-center align-center flex-column"
      style="height: 80vh"
    >
      <strong>Oops, no result for {{ route.params.userUrl }} </strong>
      <ReturnButton class="mt-5" />
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

<style scoped>
.on-hover {
  transition: 0.4s ease-in-out;
}

.on-hover:hover {
  opacity: 0.6;
}

#cardLikes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}
</style>

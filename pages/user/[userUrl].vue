<template>
  <UserLoggedInControl v-if="logInPrompt" />
  <NuxtLayout>
    <v-col style="width: 60%;">
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
        style="min-height: 1080px;"
        
      >
        <div
          style="margin-top: 100px"
          class="d-flex justify-center align-center"
        >
          <div>
            <img
              :src="userFound.profilePic"
              style="
                width: 60px;
                height: 50px;
                border-radius: 50%;
                margin-right: 60px;
              "
            />
          </div>
          <div>
            <v-row class="align-center justify-center flex-space-evenly">
              <h1>{{ userFound.username }}</h1>
              <v-row
                class="ml-15 align-center"
                v-if="userFound.username === sharedState.userName"
              >
                <EditProfile />
                <v-btn text="SHOW ARCHIVE" class="ml-2" />

                <MenuCog v-if="sharedState.userName === userFound.username" />
              </v-row>
              <v-row v-else>
                <v-btn
                  v-if="followedOrNot"
                  text="FOLLOW"
                  class="ml-10"
                  @click="followedOrNot = !followedOrNot"
                >
                  {{ followedOrNot ? "FOLLOW" : "FOLLOWING" }}
                </v-btn>
                <v-btn
                  v-if="!followedOrNot"
                  text="FOLLOWING"
                  color="success"
                  class="ml-10"
                  @click="followedOrNot = !followedOrNot"
                >
                  {{ followedOrNot ? "FOLLOW" : "FOLLOWING" }}
                  <v-icon icon="mdi-check" />
                </v-btn>
                <v-btn text="Message" class="ml-2" />
              </v-row>
            </v-row>
            <v-row justify="start" class="mt-5">
              <p>{{ userFound.page.followers }} followers</p>
              <p class="ml-5">{{ userFound.page.following }} following</p>
            </v-row>
            <v-row class="mt-7 d-flex flex-start">
              <p class="thinSmall">{{ userFound.page.presentation }}</p>
            </v-row>
          </div>
        </div>
        <SecondaryBarUserurl />
        <div
          v-if="userPosts"
          class="mt-10 ml-15 d-flex flex-row justify-center align-center flex-space-evenly flex-wrap"
          style="width: 60%"
        >
          <div
            id="allPosts"
            v-for="(post, index) in userPosts"
            class="d-flex flex-column justify-space-evenly align-center"
            :key="index"
          >
            <v-hover v-slot="{ isHovering, props }">
              <div style="max-height: 300px; max-width: 300px; margin: 25px">
                <v-img
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                  :elevation="isHovering ? 12 : 2"
                  :src="post.picture"
                  id="picturePost"
                  class="d-flex align-center justify-center"
                >
                  <p v-if="isHovering" id="cardLikes" >
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
  </NuxtLayout>
</template>

<script setup>
import { get } from "@vueuse/core";
import { storeValue, getValue, isUserLoggedIn } from "~/composables/Functions";

const followedOrNot = ref(true);
const logInPrompt = ref(false);
const route = useRoute();
const post = usePost();
const sharedState = inject("sharedState");
const status = ref("pending");
const userFound = ref(null);

getValue("loginUsername");

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

isUserLoggedIn(sharedState.userName, logInPrompt);
</script>

<style scoped>
.on-hover {
  transition: 0.4s ease-in-out;
}

.on-hover:hover {
  opacity: 0.7;
}

#cardLikes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}

.footer {
  width: 70%;
  margin-left: 60px;
}
</style>

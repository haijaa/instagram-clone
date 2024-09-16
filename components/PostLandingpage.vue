<template>
  <v-dialog max-width="500" v-model="logInPrompt">
    <v-card class="d-flex justify-center align-center">
      <strong class="mt-10">Need to be logged in to show posts.</strong>
      <p>Click the button below</p>
      <v-btn
        text="LOG IN"
        @click="
          navigateTo('/');
          load;
        "
        variant="flat"
        :loading="loading"
        color="primary"
        height="25"
        class="mt-10 mb-10"
        >LOG IN</v-btn
      >
    </v-card>
  </v-dialog>

  <!-- <img src="../assets/images/leftside-menu.png" class="position-fixed" /> -->
  <v-container class="d-flex flex-column justify-space-between position-fixed">
    <v-icon
      icon="mdi-instagram"
      size="35"
      style="margin-bottom: 10px"
      @click="refreshPage"
    />

    <Searchuser />
    <PostModal />
    <Settings />
    <v-icon icon="mdi-like" size="35" />
  </v-container>
  <v-container
    class="d-flex justify-center flex-column align-center"
    v-if="showPost"
  >
    <v-card
      class="d-flex justify-center flex-column align-center mt-1"
      v-for="content in post.users"
      :key="content.id"
    >
      <v-container class="d-flex flex-row justify-space-between align-center">
        <v-container class="d-flex flex-start flex-row align-center">
          <v-card-title>{{ content.user }} </v-card-title>
          <v-card-subtitle>• 2 hours ago</v-card-subtitle>
        </v-container>

        <v-card-text class="font-weight-bold text-h5">...</v-card-text>
      </v-container>
      <v-container
        v-for="postContent in content.posts"
        :key="postContent.caption"
        class="d-flex flex-column"
      >
        <img
          :src="postContent.picture"
          style="height: 500px; width: 400px; margin-bottom: 15px"
        />
        <v-container class="d-flex justify-space-between w-100">
          <div>
            <v-icon
              icon="mdi-heart"
              size="25"
              color="red"
              v-if="likedPosts[content.id]"
              @click="
                likePost(content.id);
                postContent.likes + 1;
              "
            />
            <v-icon
              icon="mdi-heart-outline"
              size="25"
              v-else
              @click="
                likePost(content.id);
                postContent.likes + 1;
              "
            />
            <v-icon
              icon="mdi-chat-outline"
              size="25"
              @click="
                toggleComments(content.id);
                fetchComments(content.id);
              "
            />
            <ShareContent />
          </div>
          <div class="d-flex justify-end">
            <v-icon icon="mdi-content-save-outline" />
          </div>
        </v-container>
        <v-card-text>
          tjobido har och <strong>{{ postContent.likes - 1 }}</strong> gillat
        </v-card-text>
        <v-card-text>
          <strong>{{ content.user }}: </strong>
          {{ postContent.caption }}
        </v-card-text>
      </v-container>
      <v-container v-if="activePostId === content.id">
        <p>Comments:</p>
        <div
          v-for="singleComment in commentsOnPosts.usercomments"
          :key="singleComment.comment"
          class="d-flex flex-row justfiy-center align-center flex-space-between w-100"
        >
          <p>
            <strong>{{ singleComment.user }}: </strong
            >{{ singleComment.comment }}
          </p>
        </div>
        <v-textarea
          label="Comment"
          class="w-100 mt-2"
          v-model="userInput.commentContent"
          @keyup.enter="postComments(content.id)"
          v-if="!invalidUserComment"
        />
        <p v-if="invalidUserComment" style="color: red">
          You need to login to comment
        </p>
        <v-btn
          text="comment"
          color="black"
          variant="outlined"
          size="small"
          @click="
            postComments(content.id);
            userInput.commentContent = '';
          "
        />
      </v-container>
    </v-card>
  </v-container>
</template>

<script setup>
import { usePost } from "../composables/postData";
import nuxtStorage from "nuxt-storage";
const sharedState = inject("sharedState");

sharedState.userName = nuxtStorage.localStorage.getData("loginUsername");

const post = usePost();
let commentsOnPosts = ref([]);

const showPost = ref(true);
const invalidUserComment = ref(false);
const activePostId = ref(null);
const logInPrompt = ref(false);

const likedPosts = reactive({});
const userInput = reactive({
  commentContent: "",
});

const toggleComments = (postId) => {
  if (activePostId.value === postId) {
    activePostId.value = null;
  } else {
    activePostId.value = postId;
  }
};

const refreshPage = () => {
  location.reload();
};

const fetchComments = async (postId) => {
  const data = await $fetch("/api/postComments", {
    method: "GET",
    params: { postId },
  });
  commentsOnPosts.value = data;
};

const postComments = async (postId) => {
  await $fetch("/api/postComments", {
    method: "POST",
    params: { postId },
    body: {
      user: sharedState.userName,
      comment: userInput.commentContent,
      postId,
    },
  });
  fetchComments(postId);
  userInput.commentContent = "";
  if (sharedState.userName === "") {
    invalidUserComment.value = true;
  }
};

const isUserLoggedIn = () => {
  if (sharedState.userName === "" || sharedState.userName === null) {
    logInPrompt.value = true;
  }
};
isUserLoggedIn();

const likePost = (postId) => {
  console.log(`Post ID mottagen: ${postId}`);
  if (!likedPosts[postId]) {
    likedPosts[postId] = true;
  } else {
    likedPosts[postId] = false;
  }
  console.log(
    `Klickat hjärta för inlägg ${postId}. Ny status: ${likedPosts[postId]}`
  );
};
</script>

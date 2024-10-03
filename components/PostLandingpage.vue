<template>
  <UserLoggedInControl v-if="logInPrompt" />
  <SideMenu />
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
          <img
            :src="content.profilePic"
            style="width: 40px; height: 35px; border-radius: 50%"
          />
          <v-card-title
            style="font-size: medium"
            @click="navigateTo(`/user/${content.user}`)"
            class="hover"
          >
            {{ content.user }}
          </v-card-title>
          <v-card-subtitle>• 2 hours ago</v-card-subtitle>
        </v-container>
        <MoreButtonClicked :userInformation="content.user" />
      </v-container>
      <v-container
        v-for="(postContent, index) in content.posts"
        :key="index"
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
            <v-icon
              @click="savePost(content.id)"
              icon="mdi-folder-check"
              v-if="savedPost[content.id]"
            />
            <v-icon
              @click="savePost(content.id)"
              icon="mdi-folder-arrow-down-outline"
              v-else
            />
          </div>
        </v-container>
        <v-card-text>
          tjobido och <strong>{{ postContent.likes - 1 }} andra</strong> har
          gillat detta inlägg.
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
import { getValue, isUserLoggedIn } from "~/composables/Functions";
const sharedState = inject("sharedState");

const savedPost = reactive([]);
const post = usePost();
let commentsOnPosts = ref([]);

const showPost = ref(true);
const invalidUserComment = ref(false);
const activePostId = ref(null);
const logInPrompt = ref(false);
const likedPosts = reactive({});
// const userInformation = ref([]);

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

const savePost = (postId) => {
  if (!savedPost[postId]) {
    savedPost[postId] = true;
    console.log(savedPost);
  } else {
    savedPost[postId] = false;
    console.log(savedPost);
  }
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

isUserLoggedIn(sharedState.userName, logInPrompt);

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

defineProps({
  userInformation: String,
});
</script>

<template>
  <!-- <img src="../assets/images/leftside-menu.png" class="position-fixed" /> -->
  <v-container class="d-flex flex-column justify-space-evenly position-fixed">
    <v-icon
      icon="mdi-instagram"
      size="35"
      style="margin-bottom: 10px"
      @click="refreshPage"
    />

    <Searchuser />
    <PostModal />
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
        <!-- <v-icon
          icon="mdi-eye-remove-outline"
          @click="selectedCard(content.id)"
        /> -->
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
            <v-icon icon="mdi-heart-outline" size="25" />
            <v-icon
              icon="mdi-chat-outline"
              size="25"
              @click="
                toggleComments();
                fetchComments();
              "
            />
            <v-icon icon="mdi-share-outline" size="25" />
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
      <v-container v-if="commentField">
        <p>Comments:</p>
        <div
          v-for="singleComment in commentsOnPosts.usercomments"
          :key="singleComment.comment"
        >
          <p>
            <strong>{{ singleComment.user }}:</strong
            >{{ singleComment.comment }}
          </p>
        </div>
        <v-textarea
          label="Comment"
          class="w-100 mt-2"
          v-model="userInput.commentContent"
          @keyup.enter="postComments()"
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
            postComments();
            userInput.commentContent = '';
          "
        />
      </v-container>
    </v-card>
  </v-container>
</template>

<script setup>
import { usePost } from "../composables/postData";
const showPost = ref(true);
const commentField = ref(false);
const invalidUserComment = ref(false);
const post = usePost();
const sharedState = inject("sharedState");
let commentsOnPosts = ref([]);
const userInput = reactive({
  commentContent: "",
});

/* const selectedCard = (id) => {
  post.users.value = post.users.filter((user) => user.id !== id);
  console.log("Klickat ID:", id);
}; */

const toggleComments = () => {
  commentField.value = !commentField.value;
};

const refreshPage = () => {
  location.reload();
};

const fetchComments = async () => {
  const data = await $fetch("/api/postComments");
  commentsOnPosts.value = data;
};

const postComments = async () => {
  await $fetch("/api/postComments", {
    method: "POST",
    body: {
      user: sharedState.userName,
      comment: userInput.commentContent,
    },
  });
  fetchComments();
  userInput.commentContent = "";
  if (sharedState.userName === "") {
    invalidUserComment.value = true;
  }
};
</script>

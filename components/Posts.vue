<template>
  <v-card
    v-for="(item, index) in allPosts"
    :key="index"
    style="max-width: 430px; margin-top: 50px"
    variant="solo"
  >
    <v-col class="d-flex flex-column justify-center">
      <v-row class="mb-5 justify-space-between">
        <div class="d-flex align-center">
          <img :src="item.user_avatar" class="profilePicPosts" />
          <p
            class="boldSmall"
            style="max-width: 100%"
            @click="navigateTo(`/user/${item.post_username}`)"
          >
            {{ item.post_username }}
          </p>
          <p class="thinSmall">• {{ timeSince(item.created_at) }}</p>
        </div>
        <MoreButtonClicked />
      </v-row>
      <img :src="item.image_url" style="width: 100%; height: 400px" />
    </v-col>

    <v-container class="d-flex justify-space-between w-100">
      <div>
        <v-icon
          icon="mdi-heart"
          size="25"
          color="red"
          v-if="likedPosts[item.post_id]"
          @click="likePost(item.post_id)"
        />
        <v-icon
          icon="mdi-heart-outline"
          size="25"
          v-else
          @click="likePost(item.post_id)"
        />
        <v-icon
          icon="mdi-chat-outline"
          size="25"
          @click="toggleComments(item.post_id)"
        />
        <ShareContent />
      </div>
      <div class="d-flex justify-end">
        <v-icon
          @click="savePost(item.post_id)"
          icon="mdi-bookmark"
          v-if="savedPost[item.post_id]"
        />
        <v-icon
          @click="savePost(item.post_id)"
          icon="mdi-bookmark-outline"
          v-else
        />
      </div>
    </v-container>
    <v-card-text>
      <strong
        @click="navigateTo(`/user/${item.post_username}`)"
        class="hoverNotUnderline"
        >{{ item.post_username }}:
      </strong>
      {{ item.caption }}
      <p
        class="thinSmall hoverNotUnderline"
        @click="
          toggleComments(item.post_id);
          fetchWithId(item.post_id);
        "
      >
        Show all {{ item.comments.length }} comments
      </p>
      <div
        class="d-flex"
        v-for="(comment, index) in item.comments"
        :key="index"
        v-if="activePostId === item.post_id"
      >
        <p class="boldSmall" style="margin-right: 5px; max-width: 100%">
          {{ comment.comment_author }}:
        </p>
        <p class="thinSmall">{{ comment.comment_content }}</p>
      </div>
      <v-divider />
      <div class="d-flex justify-space-between">
        <input
          type="text"
          placeholder="Add comment"
          style="width: 70%"
          v-model="commentInput"
        />
        <p
          class="smallBlue"
          style="max-width: 100%"
          v-if="commentInput !== ''"
          @click="postComment(item.post_id)"
        >
          Publish
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { isUserLoggedIn } from "../composables/Functions";
const sharedState = inject("sharedState");
const allPosts = ref([]);
const specificPost = ref([]);
const activePostId = ref(null);
const savedPost = reactive([]);
const likedPosts = reactive({});
const commentInput = ref("");
const logInPrompt = ref(false);

const fetchPosts = async () => {
  try {
    const data = await $fetch("http://localhost:3001/postsWithComments");
    if (data) {
      allPosts.value = data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      console.log(allPosts.value, "här är det.");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const fetchWithId = async (postId) => {
  try {
    const data = await $fetch(
      `http://localhost:3001/getPostsWithCommentsOnId/${postId}`
    );
    if (data) {
      specificPost.value = data;
      console.log(specificPost.value, "ID-förfrågan");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

isUserLoggedIn(sharedState.userName, logInPrompt);

const postComment = async (postId) => {
  try {
    const userData = await $fetch("http://localhost:3001/users");
    const user = userData.find((i) => i.username === sharedState.userName);
    console.log(user);
    if (!user) {
      throw new Error("User not found");
    }
    const userId = user.id;
    const data = await $fetch(`http://localhost:3001/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_id: postId,
        user_id: userId,
        content: commentInput.value,
      }),
    });
    console.log("Kommentar postad:", data);
    fetchWithId(postId);
    commentInput.value = "";
  } catch (error) {
    console.error("Fel vid postning av kommentar:", error);
  }
};

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

const timeSince = (date) => {
  const now = new Date();

  const seconds = Math.floor((now - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return interval === 1 ? interval + " year ago" : interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval === 1 ? interval + " month ago" : interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval === 1 ? interval + " day ago" : interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval === 1 ? interval + " hour ago" : interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval === 1
      ? interval + " minute ago"
      : interval + " minutes ago";
  }
  return Math.floor(seconds) === 1
    ? Math.floor(seconds) + " second ago"
    : Math.floor(seconds) + " seconds ago";
};

onMounted(() => {
  fetchPosts();
});

const props = defineProps({
  postInformation: Array,
});
</script>

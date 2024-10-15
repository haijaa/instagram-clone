<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-row class="hoverNotUnderline" v-bind="activatorProps">
        <v-icon icon="mdi-plus" size="25" />
        <p class="hidden-sm-and-down ml-3">Post</p>
      </v-row>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card rounded-lg>
        <v-container
          style="height: 40px"
          class="d-flex justify-center align-center"
        >
          Post new content</v-container
        >
        <v-divider class="mb-10" />
        <v-container
          class="d-flex align-center justify-center flex-column mt-8"
          v-if="status === 'posting'"
        >
          <v-container class="align-center d-flex justify-center flex-column">
            <v-row class="mb-10">
              <v-icon icon="mdi-image-multiple" size="55" />
              <v-icon icon="mdi-play-box-outline" size="55" />
            </v-row>
            <input
              type="text"
              style="background-color: grey"
              placeholder="Image URL"
              class="mt-5"
              v-model="post.url"
            />
            <input
              type="text"
              style="background-color: grey"
              placeholder="Caption"
              class="mt-5"
              v-model="post.caption"
              v-if="post.url !== ''"
            />
          </v-container>
          <v-container class="align-center d-flex justify-center flex-column">
            <!-- <p class="mt-5">Drag photo or video here.</p> -->
            <v-btn color="primary" class="mt-5" @click="postContent()"
              >POST</v-btn
            >
          </v-container>
        </v-container>
        <v-container
          v-if="status === 'success'"
          class="d-flex align-center justify-center flex-column"
        >
          <v-card-title style="color: green" class="mb-10"
            >Yay, content posted <v-icon icon="mdi-check" size="35"
          /></v-card-title>
          <v-btn color="success" @click="isActive.value = false">Close</v-btn>
        </v-container>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
const status = "posting";
const sharedState = inject("sharedState");
const logInPrompt = ref(false);
const post = reactive({
  url: "",
  caption: "",
});

if (!sharedState.userName) {
  logInPrompt.value = true;
}

const postContent = async () => {
  try {
    const userData = await $fetch("http://localhost:3001/users");
    const user = userData.find((i) => i.username === sharedState.userName);

    if (!user) {
      console.log("User not found");
      return;
    }

    const user_id = user.id;
    const data = await $fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        image_url: post.url,
        caption: post.caption,
        user_id: user_id,
      }),
    });

    if (data.success) {
      console.log("Content posted", data);
      status.value === "success";
    } else {
      console.log("Post failed", data.error);
    }
  } catch (error) {
    console.log("Could not post content due to error:", error);
  }
};
</script>

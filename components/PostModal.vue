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
        >
          <v-container class="align-center d-flex justify-center flex-column">
            <v-row class="mb-10">
            <v-icon icon="mdi-image-multiple" size="55" />
            <v-icon icon="mdi-play-box-outline" size="55" />
          </v-row>
            <input type="text" style="background-color: grey;" placeholder="Image URL" class="mt-5" v-model="post.url"/>
            <input type="text" style="background-color: grey;" placeholder="Caption" class="mt-5" v-model="post.caption" v-if="post.url !== ''"/>
          </v-container>
          <v-container class="align-center d-flex justify-center flex-column">
            <!-- <p class="mt-5">Drag photo or video here.</p> -->
            <v-btn color="primary" class="mt-5" @click="postContent()">POST</v-btn>
          </v-container>
        </v-container>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { getValue } from '../composables/Functions';

const post = reactive({
  url: '',
  caption: ''
})

const loggedInUser = ref([])
getValue('loginUsername', loggedInUser)
console.log(loggedInUser.value, 'här')

const postContent = async () => {
  
  const data = await $fetch(`http://localhost:3001/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json', 
    },
    body: {
      image_url: post.url,
      caption: post.caption 
    }
  })
}
</script>

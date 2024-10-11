<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-bottom-navigation :elevation="0" grow>
          <v-btn value="recent">
            <v-icon>mdi-history</v-icon>
            <span>Recent</span>
          </v-btn>

          <v-btn value="favorites">
            <v-icon>mdi-heart</v-icon>
            <span>Favorites</span>
          </v-btn>

          <v-btn value="nearby">
            <v-icon>mdi-map-marker</v-icon>
            <span>Nearby</span>
          </v-btn>
        </v-bottom-navigation>
        
        <!-- Loopar igenom allPosts för att rendera varje post -->
        <v-card
          v-for="(item, index) in allPosts"
          :key="index"
          style="max-width: 450px; max-height: 600px; margin-top: 50px;"
          variant="solo"
        >
          <v-col>
            <v-row class="mb-2">
            <p class="boldSmall"> {{ item.username }}</p>
            <p class="thinSmall">{{ timeSince(item.created_at) }}</p>
          </v-row>
          <img :src="item.image_url" style="width: 350px; height: 350px"/>
          <v-card-subtitle>{{ item.caption }}</v-card-subtitle>
        </v-col>
        </v-card>
      </v-container>
    </v-main>

    <v-footer app>
      <span>Footer content here</span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const allPosts = ref([]);  
const fetchPosts = async () => {
  try {
    const data = await $fetch('http://localhost:3001/posts');
    if (data) {
      allPosts.value = data;  
      console.log(allPosts.value, 'här är det.');
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
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
    return interval === 1 ? interval + " minute ago" : interval + " minutes ago";
  }
  return Math.floor(seconds) === 1 ? Math.floor(seconds) + " second ago" : Math.floor(seconds) + " seconds ago";
  
}

onMounted(() => {
  console.log(new Date())
  fetchPosts();
});
</script>

<style scoped>
.v-application {
  height: 100vh;
  overflow: auto;
}

.v-application--wrap {
  min-height: 100%;
}
</style>

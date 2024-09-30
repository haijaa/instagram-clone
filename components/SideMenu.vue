<template>
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
  </v-container>
</template>

<script setup>
const refreshPage = () => {
  location.reload();
};
</script>

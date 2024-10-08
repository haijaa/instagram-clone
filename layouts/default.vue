<template>
  <div class="standard">
    <SideMenu />
    <slot />
  </div>
  <v-footer>
    <Footer />
  </v-footer>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style></style>

<template>
  <SideMenu style="min-width: 160px;"/>
  <div class="standard">
    <slot />
    <ScrollToTopButton />
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

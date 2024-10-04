<template>
  <div class="standard">
    <SideMenu />
    <slot />
  </div>

</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style></style>

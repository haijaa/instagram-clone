<template>
  <v-footer class="mt-auto">
    <v-row justify="center" no-gutters>
      <v-col>
        <v-container class="d-flex w-100 align-center px-4 justify-center">
          <NuxtLink
            v-for="link in links"
            :key="link"
            class="mx-2"
            @click="testButton()"
            id="linksFooter"
          >
            <p>{{ link }}</p>
          </NuxtLink>
        </v-container>
      </v-col>
      <v-container class="d-flex flex-column justify-center align-center">
        <v-row class="mb-1">
          Contact Uploading & Non-Users - Meta Verified
        </v-row>
        <p>© {{ new Date().getFullYear() }} Instagram from Meta</p>
      </v-container>
    </v-row>
  </v-footer>
</template>

<script setup>
const links = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Cookie Settings",
  "Terms",
  "Locations",
  "Threads",
];

function testButton() {
  return alert("Is clickable");
}
</script>

<style scoped>
#linksFooter:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>

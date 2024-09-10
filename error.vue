<template>
  <main>
    <v-container class="d-flex justify-center align-center flex-column">
      <p>Sorry, it looks like something broke.</p>
      <strong style="margin-top: 10px">{{ error.status }}</strong>
      <strong style="margin-top: 10px">{{ error.message }}</strong>
      <ReturnButton class="mt-5" />
    </v-container>
  </main>
</template>

<script setup>
const error = useError();
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

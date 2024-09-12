<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon
        icon="mdi-share-outline"
        size="25"
        v-bind="activatorProps"
        @click="fetchUsers()"
      />
    </template>
    <template v-slot:default="{ isActive }">
      <v-container class="d-flex justify-center align-center">
        <v-card class="w-50">
          <v-card-title> Send to who? </v-card-title>
          <v-card-subtitle v-for="link in user" :key="user.fullname">
            {{ link.username }}
          </v-card-subtitle>
          <v-container class="d-flex justify-end">
            <v-btn
              @click="isActive.value = false"
              text="Close"
              class="w-25"
              color="error"
              variant="text"
            />
          </v-container>
        </v-card>
      </v-container>
    </template>
  </v-dialog>
</template>

<script setup>
const fetchUsers = async () => {
  const response = await $fetch("/api/userDatabase");
  const user = response.users.map((user) => user);
  console.log(user);
};
fetchUsers();
</script>

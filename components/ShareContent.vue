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
          <div class="d-flex justify-center align-center" v-if="sendConfirmation">
            <p style="color: green;">Post sent </p>
          </div>
          <div v-for="users in userData" :key="users.username" class="mb-1 d-flex justify-space-between" v-else>
          <v-card-subtitle >
            {{ users.username }}
          </v-card-subtitle>
          <v-icon icon="mdi-send-check-outline" class="mr-3" size="15" @click="sendConfirmation = !sendConfirmation"/>

        </div>
          <v-container class="d-flex justify-end">
            <v-btn
              @click="isActive.value = false;"
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
let userData = ref([])
const sendConfirmation = ref(false)

const fetchUsers = async () => {
  const data = await $fetch("/api/userDatabase");
  userData.value = data.users
  console.log('Klick', userData.value)
  sendConfirmation.value = false
};



</script>

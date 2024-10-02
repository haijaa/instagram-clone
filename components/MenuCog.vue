<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon
        icon="mdi-cog-outline"
        size="35"
        v-bind="activatorProps"
        @click="hejhej()"
      />
    </template>
    <template v-slot:default="{ isActive }">
      <v-container class="d-flex justify-center align-center flex-column">
        <v-card style="min-width: 50%; border-radius: 4%">
          <NuxtLink class="hover"
            ><v-card-title class="justify-center"
              >Appar och webbplatser</v-card-title
            ><v-divider
          /></NuxtLink>
          <NuxtLink class="hover"
            ><v-card-title>QR-kod</v-card-title><v-divider
          /></NuxtLink>
          <NuxtLink class="hover"
            ><v-card-title>Aviseringar</v-card-title><v-divider
          /></NuxtLink>
          <NuxtLink class="hover"
            ><v-card-title>Inställlningar och integritet</v-card-title
            ><v-divider
          /></NuxtLink>
          <NuxtLink class="hover"
            ><v-card-title>Meta Verified</v-card-title><v-divider
          /></NuxtLink>
          <NuxtLink class="hover"
            ><v-card-title>Vägledning</v-card-title><v-divider
          /></NuxtLink>
          <NuxtLink class="hover"
            ><v-card-title @click="logOutButton()">Logga ut</v-card-title
            ><v-divider
          /></NuxtLink>
          <NuxtLink class="hover"
            ><v-card-title @click="isActive.value = false">Avbryt</v-card-title
            ><v-divider
          /></NuxtLink>
        </v-card>
      </v-container>
    </template>
  </v-dialog>
</template>

<script setup>
import { storeValue, getValue } from "../composables/Functions";
const sharedState = inject("sharedState");
sharedState.userName = getValue("loginUsername");

const logOutButton = () => {
  navigateTo("/");
  sharedState.userName = storeValue("loginUsername", "");
};

const hejhej = () => {
  console.log("Du har klickat.");
};
</script>

<style>
.hover:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>

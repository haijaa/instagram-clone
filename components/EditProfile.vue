<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn text="EDIT PROFILE" class="ml-2" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-container class="d-flex justify-center align-center">
        <v-card class="w-50">
          <v-card-title> Edit profile </v-card-title>
          <v-container class="justify-center">
            <v-textarea
              clear
              clear-icon="mdi-close-cirlce"
              variant="underlined"
              label="Edit profile information"
            />
          </v-container>
          <v-container class="d-flex justify-end">
            <v-btn
              @click="isActive.value = false"
              text="Close"
              class="w-25"
              color="error"
              variant="text"
            />
            <v-btn
              @click="isActive.value = false"
              text="Edit"
              class="w-25"
              color="success"
              variant="text"
            />
          </v-container>
        </v-card>
      </v-container>
    </template>
  </v-dialog>
</template>

<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-row>
        <v-icon icon="mdi-plus" size="25" v-bind="activatorProps" />
        <p class="hidden-sm-and-down ml-3">Post</p>
      </v-row>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card rounded-lg>
        <v-container
          style="height: 40px"
          class="d-flex justify-center align-center"
        >
          Post new content</v-container
        >
        <v-divider class="mb-10" />
        <v-container
          class="d-flex align-center justify-center flex-column mt-10"
        >
          <v-container class="align-center d-flex justify-center">
            <v-icon icon="mdi-image-multiple" size="55" />
            <v-icon icon="mdi-play-box-outline" size="55" />
          </v-container>
          <v-container class="align-center d-flex justify-center flex-column">
            <p class="mt-5">Drag photo or video here.</p>
            <v-btn color="primary" class="mt-5">Choose file</v-btn>
          </v-container>
        </v-container>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup></script>

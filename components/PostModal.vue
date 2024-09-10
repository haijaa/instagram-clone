<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" color="surface-variant" variant="text"
        ><v-icon icon="mdi-plus" size="40"></v-icon
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="POST">
        <v-container class="d-flex justify-center align-center flex-column">
          {{ sharedState.userName }}
          <v-text-field class="w-50" label="Caption" />
          <v-container class="w-100 h-100 d-flex justify-center align-center">
            <v-icon icon="mdi-paperclip" size="100" />
          </v-container>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text="CLOSE"
            @click="isActive.value = false"
            variant="elevated"
            color="error"
          ></v-btn>
          <v-btn text="POST" variant="elevated" color="primary" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
const sharedState = inject("sharedState");
</script>

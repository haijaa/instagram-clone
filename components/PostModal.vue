<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon icon="mdi-plus" size="40" v-bind="activatorProps" />
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="POST">
        <v-container class="d-flex justify-center align-center flex-column">
          {{ sharedState.userName }}
          <v-textarea
            label="Caption"
            variant="underlined"
            clear-icon="mdi-close-circle"
            clearable
            :rules="rules"
            counter
          />
          <v-container class="w-100 h-100 d-flex justify-center align-center">
            <v-file-input />
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
const rules = [(c) => c.length <= 150 || "Max characters is 150"];
</script>

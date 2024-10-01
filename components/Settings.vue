<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon icon="mdi-cog-outline" size="35" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-container class="d-flex justify-center align-center">
        <v-card class="w-50">
          <v-card-title> Settings </v-card-title>
          <v-switch
            @click="toggleTheme"
            :label="
              theme.global.current.value.dark
                ? 'Swap to lightmode'
                : 'Swap to darkmode'
            "
            class="ml-5"
            v-model="theme.global.current.value.dark"
          />
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
import { useTheme } from "vuetify";
import { storeValue, getValue } from "~/composables/useLocalstorage";

const theme = useTheme();
const storedTheme = getValue("themeUser");

onMounted(() => {
  if (storedTheme) {
    theme.global.name.value = storedTheme;
  }
});

const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  storeValue("themeUser", newTheme);
};
</script>

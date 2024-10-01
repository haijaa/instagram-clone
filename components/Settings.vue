<template>
  <v-menu>
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon icon="mdi-menu" size="25" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-menu>
      <template v-slot:activator="{ props: openSettings }">
        <v-list-item class="hover" v-bind="openSettings" @click="isActive.value = false; settingsOpened.value = true">
          Swap theme
        </v-list-item>
      </template>
      <template v-slot:default="{ settingsOpened }">
        <v-list-title> Settings </v-list-title>
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
      </template>
    </v-menu>
        <v-list-item @click="logOutButton()" class="hover">
          Log out
        </v-list-item>
    </template>
  </v-menu>
</template>

<script setup>
import { useTheme } from "vuetify";
import { storeValue, getValue } from "~/composables/Functions";

const theme = useTheme();
const storedTheme = getValue("themeUser");

onMounted(() => {
  if (storedTheme) {
    theme.global.name.value = storedTheme;
  }
});

const logOutButton = () => {
  navigateTo("/");
  sharedState.userName = storeValue("loginUsername", "");
};

const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  storeValue("themeUser", newTheme);
};
</script>

<template>
  <v-menu offset-y :close-on-content-click="false">
    <template v-slot:activator="{ props: activatorProps }">
      <v-row class="hoverNotUnderline">
        <v-icon icon="mdi-menu" size="25" v-bind="activatorProps" />
        <p class="hidden-sm-and-down ml-3">Settings</p>
      </v-row>
    </template>
    <template v-slot:default="{ isActive }">
      <v-list>
        <v-list-item class="hover" @click="openSub = !openSub">
          Settings
        </v-list-item>
        <v-list-item style="margin: 0; padding: 0; margin-right: 5px">
          <v-switch
            @click="toggleTheme"
            :label="
              theme.global.current.value.dark
                ? 'Swap to lightmode'
                : 'Swap to darkmode'
            "
            class="ml-5 notHover"
            v-model="theme.global.current.value.dark"
            v-if="openSub"
          />
        </v-list-item>
        <v-list-item class="hover" @click="logOutButton()">
          Log out
        </v-list-item>
      </v-list>
    </template>
  </v-menu>
</template>
<script setup>
import { useTheme } from "vuetify";
import { storeValue, getValue } from "~/composables/Functions";

const theme = useTheme();
const openSub = ref(false);
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

<style scoped>
.notHover {
  text-decoration: none;
}
</style>

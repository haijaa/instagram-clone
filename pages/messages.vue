<template>
  <v-container
    class="d-flex"
    style="height: 100vh; width: 100vw; margin: 0; padding: 0"
  >
    <v-container
      style="max-width: 150px; padding: 0; margin: 0; padding-right: 25px"
    >
      <SideMenu />
    </v-container>
    <v-container class="d-flex" style="margin-left: 15px">
      <v-divider vertical class="mr-10" />
      <MessagesList />
      <v-divider vertical class="ml-10" />
      <MessageContainer />
    </v-container>
  </v-container>
</template>

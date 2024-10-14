<template>
  <v-dialog style="min-width: 50%">
    <template v-slot:activator="{ props: activatorProps }">
      <v-row class="hoverNotUnderline" v-bind="activatorProps">
        <v-icon icon="mdi-plus" size="25" />
        <p class="hidden-sm-and-down ml-3">Post</p>
      </v-row>
    </template>

    <template v-slot:default="{ isActive }">
      <v-container class="d-flex">
        <v-container style="width: 50%; background-color: white">
          BILD
        </v-container>
        <v-container style="width: 50%; background-color: white">
          KOMMENTARER
        </v-container>
      </v-container>
    </template>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
  postInformation: Array,
});
console.log(props.postInformation[0].caption, "EN KONSOL PÅ PROPS");
</script>

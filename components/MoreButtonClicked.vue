<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon icon="mdi-dots-horizontal" size="25" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-container class="d-flex justify-center align-center flex-column">
        <v-card style="min-width: 50%">
          <div class="p-0 m-0 d-flex align-center justify-center">
            <p style="font-weight: 300; color: red" class="hover">Report</p>
          </div>
          <v-divider />
          <div class="mt-1 d-flex align-center justify-center">
            <p style="font-weight: 300; color: red" class="hover">Unfollow</p>
          </div>
          <v-divider />
          <div class="mt-1 d-flex align-center justify-center">
            <p class="hover">Add to favorites</p>
          </div>
          <v-divider />
          <div class="mt-1 d-flex align-center justify-center">
            <p class="hover">Go to post</p>
          </div>
          <v-divider />
          <div class="mt-1 d-flex align-center justify-center">
            <p class="hover">
              Share
              <ShareContent />
            </p>
          </div>
          <v-divider />
          <div class="mt-1 d-flex align-center justify-center">
            <p class="hover">Copy link</p>
          </div>
          <v-divider />
          <div class="mt-1 d-flex align-center justify-center">
            <p class="hover">Embed</p>
          </div>
          <v-divider />
          <div class="mt-1 d-flex align-center justify-center">
            <p @click="navigateTo(`/user/${userInformation}`)" class="hover">
              About this account
            </p>
          </div>
          <v-divider />
          <div class="mt-1 d-flex align-center justify-center">
            <p @click="isActive.value = !isActive" class="hover">Cancel</p>
          </div>
          <v-divider />
        </v-card>
      </v-container>
    </template>
  </v-dialog>
</template>

<script setup>
const showShare = ref(false);
defineProps({
  userInformation: String,
});
</script>

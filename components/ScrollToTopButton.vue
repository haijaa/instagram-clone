<template>
  <v-btn
    v-if="isScrolled"
    rounded
    variant="outlined"
    v-bind="props"
    @click="topScroll"
    class="scroll-to-top"
    ><v-icon icon="mdi-arrow-up" size="35"
  /></v-btn>
</template>

<script setup>
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const topScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

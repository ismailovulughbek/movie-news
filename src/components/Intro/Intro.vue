<template>
  <Transition name="intro" mode="out-in">
    <div class="intro" v-if="upcomingArray">
      <IntroItem
        v-for="(movie, idx) in upcomingArray"
        :key="idx"
        :movie="movie"
        :idx="idx"
        :slideView="slideView"
        :nextMovie="
          upcomingArray[idx + 1 == upcomingArray.length ? 0 : idx + 1]
        "
        @nextSlide="nextSlide"
      />
    </div>
    <loader v-else />
  </Transition>
</template>

<script setup>
import IntroItem from "./IntroItem.vue";
import { onMounted, computed, ref } from "vue";
import { useUpcoming } from "@/stores/upcoming";

const upcomingStore = useUpcoming();
const upcomingArray = computed(() => upcomingStore.upcoming);
let slideView = ref(0);
let timeOut = ref(null);
const slide = () => {
  if (slideView.value == upcomingArray.value.length - 1) slideView.value = 0;
  else slideView.value++;
  timeOut.value = setTimeout(slide, 10000);
};
const nextSlide = () => {
  clearTimeout(timeOut.value);
  slide();
};

onMounted(() => {
  upcomingStore.getUpcoming();
  timeOut.value = setTimeout(slide, 10000);
});
</script>

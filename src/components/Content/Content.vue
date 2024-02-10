<template>
  <section class="media" v-if="mediaArray.length > 0">
    <div class="container">
      <h2 class="media__title">
        {{ type == "movie" ? "Все фильмы" : "Все сериалы" }}
      </h2>
      <div class="media__list">
        <media-item
          v-for="content in mediaArray"
          :key="content.id"
          :content="content"
          :type="type"
        />
      </div>
    </div>
  </section>
  <loader v-if="mediaArray.length == 0 || loading" />
</template>

<script setup>
import { usePopular } from "@/stores/popular";
import { onMounted, ref } from "vue";

const popularStore = usePopular();
const props = defineProps(["type"]);

let page = ref(1);
let mediaArray = ref([]);
let loading = ref(false);

const getMedia = async () => {
  if (!loading.value) {
    loading.value = true;
    await popularStore.getPopular(props.type, page.value);
    let state =
      props.type == "movie"
        ? popularStore.popularMovie
        : popularStore.popularTv;
    mediaArray.value.push(...state);
    loading.value = false;
    page.value++;
  }
};

onMounted(() => {
  getMedia();
});
</script>

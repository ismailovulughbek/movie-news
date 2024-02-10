<template>
  <section class="search">
    <div class="container">
      <input
        type="text"
        class="search__input"
        :placeholder="placeholder"
        v-model="inputText"
      />
      <div class="media__list" v-if="array">
        <MediaItem
          v-for="content in array"
          :key="content.id"
          :content="content"
          :type="content.media_type"
        />
      </div>
      <div class="search__paginate" v-if="array">
        <vue-awesome-paginate
          :total-items="totalResult"
          :items-per-page="20"
          :max-pages-shown="5"
          v-model="page"
          :on-click="nextPage"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSearch } from "@/stores/search";
import { computed, ref, watch } from "vue";
import MediaItem from "@/components/UI/MediaItem.vue";

const searchStore = useSearch();
const props = defineProps(["placeholder"]);
let inputText = ref("");
const array = computed(() => searchStore.searchArray);
let page = ref(1);
let totalResult = computed(() => searchStore.total_results);
const nextPage = () => {
  page.value + 1;
  searchStore.getSearch(page.value);
};

watch(
  () => inputText.value,
  (value) => {
    searchStore.search = value;
    searchStore.getSearch();
  } 
);
</script>

<template>
  <main class="main">
    <Search placeholder="Найти фильм, сериал..." />
  </main>
</template>

<script setup>
import { useSearch } from "@/stores/search";
import Search from "@/components/Search/Search.vue";
import { onBeforeUnmount } from "vue";

const searchStore = useSearch();

onBeforeUnmount(() => {
  searchStore.searchArray = null;
  searchStore.search = "";
  searchStore.total_results = 1;
});
</script>

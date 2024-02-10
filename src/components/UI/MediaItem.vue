<template>
  <router-link class="media__item" :to="`/${type}/${content.id}`">
    <img v-lazy="imgUrl + content.poster_path" alt="" class="media__item-img" />
    <span class="media__item-title">{{ content.title || content.name }}</span>
  </router-link>
</template>

<script setup>
import { imgUrl } from "@/static";
const props = defineProps(["content", "type"]);
</script>

<style lang="scss">
.media__item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &-img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #000;
    box-shadow: 0px 4px 4px 0px #000;
    transition: 0.3s linear;
  }

  &-title {
    padding: 0 10px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    .media__item-img {
      border-color: #fff;
    }
  }
}
</style>

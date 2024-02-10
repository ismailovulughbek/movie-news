<template>
  <router-link class="more-btn" :to="`/${type}/${id}`">
    <img src="@/assets/images/more-svg.svg" alt="" />
    <span>Подробнее</span>
  </router-link>
</template>

<script setup>
const props = defineProps({
  type: String,
  id: Number,
});
</script>

<style lang="scss" scoped>
.more-btn {
  background: #149a03;
  border-radius: 10px;
  height: 50px;
  width: max-content;
  display: flex;
  align-items: center;
  column-gap: 15px;
  padding: 0 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: #ffffff;
}
</style>

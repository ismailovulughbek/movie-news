<template>
  <main class="main">
    <div class="not-found">
      <h1 class="not-found__title">{{ title }}</h1>
      <p class="not-found__text">
        Страница, которую вы ищете, могла быть удалена, изменилось ее название
        или временно недоступна.
      </p>
      <router-link class="not-found__btn" to="/">Возвращайся домой</router-link>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const title = ref("404 :(");
</script>

<style lang="scss" scoped>
.not-found {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 35px;

  &__title {
    font-family: "Montserrat";
    font-size: 80px;
    font-weight: 400;
    line-height: 1.5;
    color: #149a03;
  }

  &__text {
    font-family: "Montserrat";
    max-width: 600px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    color: #fff;
  }

  &__btn {
    font-family: "Montserrat";
    background: #149a03;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
  }
}
</style>

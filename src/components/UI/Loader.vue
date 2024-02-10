<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loader {
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &__spinner {
    width: 50px;
    height: 50px;
    border: 2px solid transparent;
    border-top: 2px solid #149a03;
    border-radius: 50%;
    animation: loading 1s infinite ease-in-out;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

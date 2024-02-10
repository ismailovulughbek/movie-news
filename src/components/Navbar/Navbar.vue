<template>
  <header class="header">
    <nav class="navbar" :class="{ scroll: scrollBg }" id="headerNav">
      <div class="container">
        <router-link class="navbar__logo" to="/">
          <img src="@/assets/images/Logo.svg" alt="" />
        </router-link>
        <button class="navbar__menu" @click="burgerOn">
          <img src="@/assets/images/Menu.svg" alt="" />
        </button>
        <ul class="navbar__list" :class="{ active: burger }">
          <button class="navbar__close" @click="burgerOff">
            <img src="@/assets/images/Close.svg" alt="" />
          </button>
          <li v-for="link in list" :key="link.id" @click="burgerOff">
            <router-link class="navbar__link" :to="link.path">
              {{ link.title }}
            </router-link>
          </li>
          <li @click="burgerOff">
            <router-link class="navbar__link" to="/search">
              <img src="@/assets/images/Search.svg" alt="" />
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

const scrollBg = ref(false);
const burger = ref(false);

const scrollNav = () => {
  window.scrollY > 50 ? (scrollBg.value = true) : (scrollBg.value = false);
};

const burgerOn = () => {
  burger.value = true;
  document.body.style.overflow = "hidden";
};

const burgerOff = () => {
  burger.value = false;
  document.body.style.overflow = "visible";
};

const list = reactive([
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Фильмы", path: "/movie" },
  { id: 3, title: "Сериалы", path: "/tv" },
]);

onMounted(() => {
  window.addEventListener("scroll", () => scrollNav());
});
</script>

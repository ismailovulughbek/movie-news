<template>
  <section class="top">
    <h3 class="top__title">Топ <span>10</span></h3>
    <swiper
      :slidesPerView="3"
      :spaceBetween="25"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide v-for="(item, idx) in topList" :key="item.id">
        <router-link class="top__item" :to="`/movie/${item.id}`">
          <div class="top__item-info">
            <p class="top__item-number">{{ idx + 1 }}</p>
          </div>
          <img v-lazy="imgUrl + item.poster_path" alt="" />
        </router-link>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { useTopRate } from "@/stores/topRate";
import { reactive, onMounted, computed } from "vue";
import { imgUrl } from "@/static";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

const topStore = useTopRate();
const topList = computed(() => topStore.topList);
const modules = reactive([Navigation]);

onMounted(() => {
  topStore.getTopRate(10);
});
</script>

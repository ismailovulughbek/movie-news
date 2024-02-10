<template>
  <section class="content" v-if="content">
    <router-link :to="`/${type}`" class="content__title">
      <span>{{ type == "movie" ? "Фильмы" : "Сериалы" }}</span>
      <img src="@/assets/images/Right.svg" alt="" />
    </router-link>
    <swiper
      :slidesPerView="5"
      :spaceBetween="25"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide
        v-for="item in content"
        :key="item.id"
        @click="getItem(item.id)"
      >
        <media-item :content="item" :type="type" />
      </swiper-slide>
      <swiper-slide>
        <router-link class="content__slide" :to="`/${type}`">
          <img src="@/assets/images/right-link.png" alt="" />
          <span>{{ type == "movie" ? "Все фильмы" : "Все сериалы" }}</span>
        </router-link>
      </swiper-slide>
    </swiper>
    <div class="content__info" :class="{ active: open }" ref="info">
      <InfoBlock :current="current" :type="type" @close="closeItem" />
    </div>
  </section>
  <loader v-else />
</template>

<script setup>
import InfoBlock from "@/components/InfoBlock/InfoBlock.vue";
import { ref, reactive, onMounted, computed } from "vue";
import { usePopular } from "@/stores/popular";
import { useInfoId } from "@/stores/infoId";
import { imgUrl } from "@/static";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

const modules = reactive([Navigation]);
const popularStore = usePopular();
const infoStore = useInfoId();
const props = defineProps({
  type: {
    type: String,
  },
});
const content = computed(() =>
  props.type == "movie" ? popularStore.popularMovie : popularStore.popularTv
);

let current = ref(null);
let open = ref(false);
let info = ref(null);

const getItem = async (id) => {
  current.value = null;
  await infoStore.getInfo(props.type, id);
  current.value = props.type == "movie" ? infoStore.movie : infoStore.tv;
  open.value = true;
  let infoTop = info.value.offsetTop;
  window.scrollTo({
    top: infoTop - headerNav.offsetHeight,
    behavior: "smooth",
  });
};

const closeItem = () => {
  current.value = null;
  open.value = false;
  props.type == "movie" ? (infoStore.movie = null) : (infoStore.tv = null);
};

onMounted(() => {
  popularStore.getPopular(props.type);
});
</script>

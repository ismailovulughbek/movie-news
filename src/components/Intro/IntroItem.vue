<template>
  <Transition name="intro__item" mode="out-in">
    <div class="intro__item" v-if="slideView == idx">
      <img
        v-lazy="imgUrlFull + movie.backdrop_path"
        alt=""
        class="intro__item-bg"
      />
      <div class="intro__item-content">
        <h1 class="intro__item-content-title">{{ movie.title }}</h1>
        <p class="intro__item-content-text">{{ movie.overview }}</p>
        <more-btn type="movie" :id="movie.id" />
      </div>
      <div class="intro__item-next" @click="$emit('nextSlide')">
        <img
          :src="imgUrl + nextMovie.backdrop_path"
          alt=""
          class="intro__item-next-bg"
        />
        <div class="intro__item-next-content">
          <span class="intro__item-next-content-text">Следующий</span>
          <span class="intro__item-next-content-title">
            {{ nextMovie.title }}
          </span>
        </div>
        <div class="intro__item-next-line"></div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { imgUrlFull, imgUrl } from "@/static";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
  nextMovie: {
    type: Object,
    required: true,
  },
  idx: {
    type: Number,
  },
  slideView: {
    type: Number,
  },
});
</script>

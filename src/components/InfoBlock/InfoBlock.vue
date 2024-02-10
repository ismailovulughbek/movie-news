<template>
  <div class="info">
    <button class="info__close" @click="$emit('close')">
      <img src="@/assets/images/Close.svg" alt="" />
    </button>
    <div class="info__block" v-if="current">
      <img
        v-lazy="imgUrlFull + current.backdrop_path"
        alt=""
        class="info__bg"
      />
      <div class="info__content">
        <h2 class="info__content-title">{{ current.title || current.name }}</h2>
        <p class="info__content-overview">
          {{ current.overview ? current.overview : "" }}
        </p>
        <p class="info__content-data">
          <span
            >{{
              new Date(
                current.release_date || current.first_air_date
              ).getFullYear()
            }},
          </span>
          <span
            v-for="(item, idx) in current.genres.slice(0, 4)"
            :key="item.id"
          >
            {{ item.name }}
            <span v-if="idx < current.genres.slice(0, 4).length - 1">, </span>
          </span>
          <span class="info__content-data_runtime">
            {{ current.runtime ? runtime : "" }}
          </span>
        </p>

        <actors :type="type" :id="current.id" :count="4" />
        <more-btn :type="type" :id="current.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { imgUrlFull } from "@/static";

const props = defineProps({
  current: Object,
  type: String,
});

const runtime = computed(() => {
  let min = props.current.runtime % 60;
  let hour = Math.floor(props.current.runtime / 60);

  return hour ? `${hour}ч ${min}м` : `${min}м`;
});
</script>

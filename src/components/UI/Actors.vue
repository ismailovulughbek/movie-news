<template>
  <div class="actors" v-if="actorsArray">
    <div class="actor" v-for="actor in actorsArray" :key="actor.id">
      <img v-lazy="imgUrl + actor.profile_path" alt="" class="actor__img" />
      <span class="actor__name">{{ actor.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useActors } from "@/stores/actors";
import { imgUrl } from "@/static";

const props = defineProps(["type", "id", "count"]);
const actors = useActors();
const actorsArray = computed(() =>
  props.type == "movie" ? actors.actorsMovie : actors.actorsTv
);

onMounted(() => {
  actors.getActors(props.type, props.id, props.count);
});
</script>

<style lang="scss" scoped>
.actors {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
}

.actor {
  border: 2px solid #fff;
  border-radius: 25px;
  padding: 2px 15px 2px 2px;
  overflow: hidden;
  display: flex;
  align-items: center;
  column-gap: 10px;

  &__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__name {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
}
</style>

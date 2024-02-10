import { defineStore } from "pinia";
import axios from "axios";
import { lang, header_default } from "../static";

export const useActors = defineStore("actors", {
  state: () => ({
    baseUrl: "https://api.themoviedb.org/3/",
    actorsMovie: null,
    actorsTv: null,
  }),
  actions: {
    async getActors(type, id, count) {
      try {
        const res = await axios({
          method: "GET",
          url: `${this.baseUrl}${type}/${id}/credits?language=${lang}`,
          headers: header_default,
        });

        const data = res.data.cast;
        const array = [];

        data.forEach((item) => {
          if (array.length < count) array.push(item);
        });

        if (type == "movie") this.actorsMovie = array;
        else this.actorsTv = array;
      } catch (error) {
        console.error("Ошибка при получении Actors", error);
      }
    },
  },
});

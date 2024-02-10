import { defineStore } from "pinia";
import axios from "axios";
import { lang, header_default } from "../static";

export const usePopular = defineStore("popular", {
  state: () => ({
    baseUrl: "https://api.themoviedb.org/3/",
    popularMovie: null,
    popularTv: null,
  }),
  actions: {
    async getPopular(type, page = 1) {
      try {
        const res = await axios({
          method: "GET",
          url: `${this.baseUrl}${type}/popular?language=${lang}&page=${page}`,
          headers: header_default,
        });

        if (type == "movie") this.popularMovie = res.data.results;
        else this.popularTv = res.data.results;
      } catch (error) {
        console.error("Ошибка при получении Popular", error);
      }
    },
  },
});

import { defineStore } from "pinia";
import axios from "axios";
import { lang, header_default } from "../static";

export const useUpcoming = defineStore("upcoming", {
  state: () => ({
    baseUrl: "https://api.themoviedb.org/3/movie/upcoming",
    page: 1,
    upcoming: null,
  }),
  actions: {
    async getUpcoming() {
      try {
        let res = await axios({
          method: "GET",
          url: `${this.baseUrl}?language=${lang}?page=${this.page}`,
          headers: header_default,
        });
        this.upcoming = res.data.results.filter(
          (item) => item.backdrop_path != null && item.overview != ""
        );
      } catch (error) {
        console.error("Ошибка при получении Upcoming", error);
      }
    },
  },
  getters: {},
});

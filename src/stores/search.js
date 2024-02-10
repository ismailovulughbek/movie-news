import { defineStore } from "pinia";
import axios from "axios";
import { lang, header_default } from "../static";

export const useSearch = defineStore("search", {
  state: () => ({
    baseUrl: "https://api.themoviedb.org/3/",
    searchArray: null,
    search: "",
    adult: false,
    total_results: 1,
  }),
  actions: {
    async getSearch(page = 1) {
      if (this.search != "") {
        try {
          const res = await axios({
            method: "GET",
            url: `${this.baseUrl}search/multi?query=${this.search}&include_adult=${this.adult}&language=${lang}&page=${page}`,
            headers: header_default,
          });

          this.searchArray = res.data.results;
          this.total_results = res.data.total_results;
          console.log(res.data);
        } catch (error) {
          console.error("Ошибка при получении Search", error);
        }
      } else {
        this.searchArray = null;
      }
    },
  },
});

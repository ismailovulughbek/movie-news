import { defineStore } from "pinia";
import axios from "axios";
import { lang, header_default } from "../static";

export const useTopRate = defineStore("topRate", {
  state: () => ({
    baseUrl: "https://api.themoviedb.org/3/",
    topList: null,
  }),
  actions: {
    async getTopRate(count) {
      try {
        const res = await axios({
          method: "GET",
          url: `${this.baseUrl}movie/top_rated?language=${lang}&page=1`,
          headers: header_default,
        });

        const data = res.data.results;
        const top10 = [];

        data.forEach((item) => {
          if (top10.length < count) top10.push(item);
        });

        this.topList = top10;

        
      } catch (error) {
        console.error("Ошибка при получении TopRate", error);
      }
    },
  },
});

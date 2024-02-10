import { defineStore } from "pinia";
import axios from "axios";
import { lang, header_default } from "../static";

export const useInfoId = defineStore("infoId", {
  state: () => ({
    baseUrl: "https://api.themoviedb.org/3/",
    movie: null,
    tv: null,
  }),
  actions: {
    async getInfo(type, id) {
      try {
        const res = await axios({
          method: "GET",
          url: `${this.baseUrl}${type}/${id}?language=${lang}`,
          headers: header_default,
        });

        if (type == "movie") this.movie = res.data;
        else this.tv = res.data;
      } catch (error) {
        console.error("Ошибка при получении InfoId", error);
      }
    },
  },
});

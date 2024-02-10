const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU3MjI5OGM5ZmJkN2E5NjAwNTMzMjRiNTVjMDk2YiIsInN1YiI6IjYzM2QyNTVjODdmM2YyMDA3YTMwZjRmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kz0YTO9ukgb9U44HgJC2Bx7RG2TdgUDl24jkrwbLiYo";

const lang = "ru-RU";

const header_default = {
  Authorization: `Bearer ${apiKey}`,
  Accept: "application/json",
};

const imgUrlFull = "https://image.tmdb.org/t/p/original";
const imgUrl = "https://image.tmdb.org/t/p/w500";

export { lang, header_default, imgUrlFull, imgUrl };

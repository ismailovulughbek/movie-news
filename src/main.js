import "./assets/scss/main.scss";
import "./static";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueLazyload from "vue-lazyload";
import VueAwesomePaginate from "vue-awesome-paginate";

import "vue-awesome-paginate/dist/style.css";

import noPhoto from "./assets/images/noPhoto.jpg";

import Actors from "./components/UI/Actors.vue";
import Loader from "./components/UI/Loader.vue";
import MediaItem from "./components/UI/MediaItem.vue";
import MoreBtn from "./components/UI/MoreBtn.vue";

const app = createApp(App);

app.component("actors", Actors);
app.component("loader", Loader);
app.component("media-item", MediaItem);
app.component("more-btn", MoreBtn);
app.use(VueAwesomePaginate);
app.use(VueLazyload, {
  error: noPhoto,
});
app.use(createPinia());
app.use(router);

app.mount("#app");

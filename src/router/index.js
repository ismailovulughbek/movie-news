import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/404.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movie",
      name: "movie",
      component: () => import("../views/MovieView.vue"),
    },
    {
      path: "/movie/:id",
      name: "movie-id",
      component: () => import("../views/MovieIdView.vue"),
    },
    {
      path: "/tv",
      name: "tv",
      component: () => import("../views/TvView.vue"),
    },
    {
      path: "/tv/:id",
      name: "tv-id",
      component: () => import("../views/TvIdView.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: NotFound,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;

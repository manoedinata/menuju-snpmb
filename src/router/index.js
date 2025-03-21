import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/snbp",
      name: "snbp",
      // route level code-splitting
      // this generates a separate chunk for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/jadwal/SNBPView.vue"),
    },
    {
      path: "/snbp/:id",
      name: "snbp-specific",
      // route level code-splitting
      // this generates a separate chunk for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/jadwal/SNBPView.vue"),
    },
    {
      path: "/snbt",
      name: "snbt",
      // route level code-splitting
      // this generates a separate chunk for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/jadwal/SNBTView.vue"),
    },
    {
      path: "/snbt/:id",
      name: "snbt-specific",
      // route level code-splitting
      // this generates a separate chunk for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/jadwal/SNBTView.vue"),
    },
  ],
});

export default router;

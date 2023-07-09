import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/master/users",
    name: "Users",
    // component: () => import("../views/Master/Users.vue"),
    component: () => import("@/views/Master/Users/index.vue"),
  },
  {
    path: "/master/users/:id",
    name: "UserId",
    component: () => import("@/views/Master/Users/_id/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

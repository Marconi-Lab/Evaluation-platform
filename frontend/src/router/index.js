import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "LoginScreen",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginScreen.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/projects",
    name: "Projects Page",
    component: () => import("../views/UserProjectsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

export default router;

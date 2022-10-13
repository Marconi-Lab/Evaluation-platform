import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
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

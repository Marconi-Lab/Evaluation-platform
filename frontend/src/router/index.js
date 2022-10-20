import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/user",
    children: [
      {
        path: "projects",
        name: "Projects Page",
        component: () => import("../views/user/UserProjectsPage.vue"),
      },
      {
        path: "project/:id",
        name: "project-page",
        component: () => import("../views/user/Project.vue"),
      },
      {
        path: "signup",
        name: "SignUp",
        component: () => import("../views/user/SignUp.vue"),
      },
      {
        path: "/user",
        name: "LoginScreen",
        component: () => import("../views/user/LoginScreen.vue"),
      },
    ],
  },
  {
    path: "/admin",
    children: [
      {
        path: "projects",
        name: "admin-projects",
        component: () => import("../views/admin/Projects.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

export default router;

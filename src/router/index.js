import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/dashboard/index.vue";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard-view",
    redirect: "/dashboard/statistical",
    meta: {
      title: "Dashboard",
    },
    component: Dashboard,
    children: [
      {
        path: "statistical",
        component: import(
          /* webpackChunkName: "statistical-view" */ "../views/dashboard/statistical/index.vue"
        ),
        name: "statistical-view",
        meta: {
          title: "Statistical",
        },
      },
      {
        path: "browse-photos",
        component: import(
          /* webpackChunkName: "browse-photos-view" */ "../views/dashboard/browse-photos/index.vue"
        ),
        name: "browse-photos-view",
        meta: {
          title: "Browse Photos",
        },
      },
    ],
  },

  {
    path: "/login",
    name: "login-page",
    meta: {
      title: "login",
    },
    component: () =>
      import(/* webpackChunkName: "login-page" */ "../views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

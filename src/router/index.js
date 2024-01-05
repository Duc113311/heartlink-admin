import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/dashboard/index.vue";
import Login from "../views/login/index.vue";
import CMS from "../views/cms/index.vue";
import DashView from "../views/dashboard/dash-view/index.vue";
import StatisticalView from "../views/dashboard/statistical/index.vue";
import UserView from "../views/dashboard/list-user/index.vue";
import BrowsePhoto from "../views/dashboard/browse-photos/index.vue";

const routes = [
  {
    path: "/",
    name: "login-page",
    component: Login,
  },
  {
    path: "/cms",
    name: "cms-default-view",

    component: CMS,
  },
  {
    path: "/dashboard",
    name: "dashboard-view",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "dash-view",

        component: DashView,
      },
      {
        path: "statistical",
        name: "statistical-view",
        component: StatisticalView,
      },
      {
        path: "list-user",
        name: "user-view",
        component: UserView,
      },
      {
        path: "browse-photos",
        name: "browse-photos-view",
        component: BrowsePhoto,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/dashboard/index.vue";
import Login from "../views/login/index.vue";
import CMS from "../views/cms/index.vue";
import DashView from "../views/dashboard/dash-view/index.vue";
import StatisticalView from "../views/dashboard/statistical/index.vue";
import UserView from "../views/dashboard/list-user/index.vue";
import BrowsePhoto from "../views/dashboard/browse-photos/index.vue";
import ProfileView from "../views/dashboard/profile/index.vue";
import InterestView from "../views/dashboard/profile/interest-page/index.vue";
import GenderView from "../views/dashboard/profile/gender-page/index.vue";
import JobTitleView from "../views/dashboard/profile/job-title-page/index.vue";
import LanguageView from "../views/dashboard/profile/language-page/index.vue";
import LocationView from "../views/dashboard/profile/location-page/index.vue";
import PackageView from "../views/dashboard/profile/package-page/index.vue";
import SexualView from "../views/dashboard/profile/sexual-page/index.vue";
import SchoolView from "../views/dashboard/profile/school-page/index.vue";
import AccountView from "../views/dashboard/account/index.vue";

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
        meta: {
          nameTitle: "CMS Avatar",
        },
      },
      // Profile
      {
        path: "profile",
        name: "profile-view",
        component: ProfileView,

        children: [
          {
            path: "interest",
            name: "interest-view",
            component: InterestView,
            meta: {
              nameTitle: "Interest",
            },
          },
          {
            path: "gender",
            name: "gender-view",
            component: GenderView,
            meta: {
              nameTitle: "Gender",
            },
          },
          {
            path: "job-title",
            name: "job-title-view",
            component: JobTitleView,
            meta: {
              nameTitle: "Job title",
            },
          },
          {
            path: "language",
            name: "language-view",
            component: LanguageView,
            meta: {
              nameTitle: "Language",
            },
          },
          {
            path: "location",
            name: "location-view",
            component: LocationView,
            meta: {
              nameTitle: "Location",
            },
          },
          {
            path: "package",
            name: "package-view",
            component: PackageView,
            meta: {
              nameTitle: "Package",
            },
          },
          {
            path: "sexual",
            name: "sexual-view",
            component: SexualView,
            meta: {
              nameTitle: "Orientation Sexual",
            },
          },
          {
            path: "school",
            name: "school-view",
            component: SchoolView,
            meta: {
              nameTitle: "School",
            },
          },
        ],
      },
      // Account
      {
        path: "account",
        name: "AccountView-view",
        component: AccountView,
        meta: {
          nameTitle: "Account",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

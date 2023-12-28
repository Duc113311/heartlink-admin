import { createStore } from "vuex";

import DashboardModule from "./dashboard/dashboardModule";

import CmsModule from "./cms/cmsModule";

export default createStore({
  modules: {
    dashboardModule: DashboardModule,
    cmsModule: CmsModule,
  },
});

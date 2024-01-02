import { createStore } from "vuex";

import DashboardModule from "./dashboard/dashboardModule";

import CmsModule from "./cms/cmsModule";
import UserModule from "./user/userModule";
import LoginModule from "./login/loginModule";
export default createStore({
  modules: {
    dashboardModule: DashboardModule,
    cmsModule: CmsModule,
    userModule: UserModule,
    loginModule: LoginModule,
  },
});

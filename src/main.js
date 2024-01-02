import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/tailwind.css";
import "./assets/style/global.css";
// element-plus

import store from "./stores/data";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(ElementPlus);

app.use(router);
app.use(store);
app.mount("#app");

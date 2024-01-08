import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/tailwind.css";
import "./assets/style/global.css";
// element-plus
// import i18n from "./i18n";
import { createI18n } from "vue-i18n";

import store from "./stores/data";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const messages = {
  en: {
    welcome: "Welcome",
    about: "About Us",
    contact: "Contact Us",
  },
  fr: {
    welcome: "Bienvenue",
    about: "À propos de nous",
    contact: "Contactez-nous",
  },
  // Thêm các ngôn ngữ khác nếu cần
};
const i18n = createI18n({
  locale: "en", // Ngôn ngữ mặc định
  messages,
});
const app = createApp(App);

app.use(ElementPlus);

app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");

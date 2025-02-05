import "normalize.css";
import "@/assets/styles/app.scss";

import { createApp } from "vue";
import pinia from "@/stores/index.js";
import i18n from "./i18n";
import router from "@/router";
import components from "@/components/index.js";
import App from "@/App.vue";

import apis from "./apis";
window.$ys = {
    apis: apis
};

const app = createApp(App);

Object.keys(components).forEach((key) => {
    app.component(key, components[key]);
});
app.use(pinia);
app.use(i18n);
app.use(router);

app.mount("#app");

import "normalize.css";

import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n/index.js";
import router from "@/router/index.js";
import pinia from "@/stores/index.js";

const app = createApp(App);
app.use(pinia);
app.use(i18n);
app.use(router);
app.mount("#app");

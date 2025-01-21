import { createI18n } from "vue-i18n";
import zhCNMessage from "./zh-CN";
import enUSMessage from "./en-US";

const i18n = createI18n({
    locale: "zh-CN",
    fallbackLocale: "en-US",
    messages: {
        "zh-CN": zhCNMessage,
        "en-US": enUSMessage
    }
});

export default i18n;

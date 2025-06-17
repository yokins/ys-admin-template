import { createI18n } from "vue-i18n";
import zhCNMessage from "./zh_CN";
import enUSMessage from "./en_US";

const i18n = createI18n({
    locale: "zh_CN",
    fallbackLocale: "en_US",
    messages: {
        zh_CN: zhCNMessage,
        en_US: enUSMessage
    }
});

export default i18n;

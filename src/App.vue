<template>
    <n-config-provider
        :locale="naiveI18n.lang"
        :date-locale="naiveI18n.dateLang"
        :theme-overrides="themeOverrides"
    >
        <component :is="currentLayout">
            <router-view></router-view>
        </component>
    </n-config-provider>
</template>

<script lang="jsx" setup>
import i18n from "@/i18n";
import { useConfigStore } from "@/stores/config";
import { dateZhCN, zhCN, enUS, dateEnUS } from "naive-ui";
import layouts from "@/layouts";
import "animate.css";

const route = useRoute();

const configStore = useConfigStore();
if (configStore.lang != i18n.global.locale) configStore.setLang(i18n.global.locale);
const naiveI18n = computed(() => {
    if (i18n.global.locale === "zh_CN") {
        return {
            lang: zhCN,
            dateLang: dateZhCN
        };
    } else {
        return { lang: enUS, dateLang: dateEnUS };
    }
});

const themeOverrides = {
    common: {
        primaryColor: "#2d8cf0"
    }
};

const currentLayout = computed(() => {
    const layoutName = route?.meta?.layout;
    return layouts[layoutName] || layouts.default;
});
</script>

<style lang="scss" scoped>
.custom-transition-enter-active,
.custom-transition-leave-active {
    position: relative;
}

.animate__animated {
    animation-duration: 0.5s;
}
</style>

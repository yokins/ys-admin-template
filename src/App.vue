<!--
 * @Author: Yokin shi
 * @Date: 2025-01-22 10:28:36
 * @LastEditors: yokins yokins.shi@icloud.com
 * @LastEditTime: 2025-02-05 17:52:13
 * @Description: 请输入文件描述
-->
<template>
    <n-config-provider
        :locale="naiveI18n.lang"
        :date-locale="naiveI18n.dateLang"
    >
        <n-modal-provider>
            <n-dialog-provider>
                <n-notification-provider>
                    <n-message-provider>
                        <component :is="currentLayout">
                            <router-view v-slot="{ Component }">
                                <transition
                                    name="custom-transition"
                                    mode="out-in"
                                    enter-active-class="animate__animated animate__fadeInRight"
                                    leave-active-class="animate__animated animate__fadeOutLeft"
                                >
                                    <component :is="Component" />
                                </transition>
                            </router-view>
                        </component>
                    </n-message-provider>
                </n-notification-provider>
            </n-dialog-provider>
        </n-modal-provider>
    </n-config-provider>
</template>

<script lang="jsx" setup>
import i18n from "@/i18n";
import { useConfigStore } from "@/stores/config";
import { dateZhCN, zhCN, enUS, dateEnUS } from "naive-ui";
import layouts from "@/layouts";
import "animate.css";

const router = useRouter();

const route = useRoute();

const configStore = useConfigStore();
if (configStore.lang != i18n.global.locale) configStore.setLang(i18n.global.locale);
const naiveI18n = computed(() => {
    if (i18n.global.locale === "zh-CN") {
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

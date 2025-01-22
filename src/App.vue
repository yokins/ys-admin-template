<!--
 * @Author: Yokin shi
 * @Date: 2025-01-22 10:28:36
 * @LastEditors: Yokin shi
 * @LastEditTime: 2025-01-22 13:33:46
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
                        <router-view></router-view>
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
</script>

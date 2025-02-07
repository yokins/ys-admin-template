<template>
    <n-button
        type="primary"
        size="small"
        text
        @click="data.show = true"
    >
        <YsIcon>
            <Settings></Settings>
        </YsIcon>
    </n-button>

    <n-drawer
        v-model:show="data.show"
        :width="300"
        placement="right"
        :show-mask="false"
    >
        <n-drawer-content :title="t('common.theme.title')">
            <ConfigBlock :title="t('common.theme.color')">
                <n-flex
                    align="center"
                    :wrap="true"
                >
                    <template
                        v-for="(item, index) in configStore.colors"
                        :key="`color_${index}`"
                    >
                        <span
                            class="color"
                            :style="{
                                background: item
                            }"
                        >
                            <YsIcon
                                :size="20"
                                color="#fff"
                                v-if="item === configStore.theme.colors.primary"
                            >
                                <Checkmark></Checkmark>
                            </YsIcon>
                        </span>
                    </template>
                </n-flex>
            </ConfigBlock>

            <ConfigBlock :title="t('common.theme.layout.headerHeight')">
                <n-slider
                    v-model:value="configStore.layout.header.height"
                    :min="30"
                    :max="50"
                    :step="1"
                    :marks="{
                        30: '30px',
                        50: '50px'
                    }"
                />
            </ConfigBlock>

            <ConfigBlock :title="t('common.theme.layout.tabHeight')">
                <n-slider
                    v-model:value="configStore.layout.tabs.height"
                    :min="30"
                    :max="50"
                    :step="1"
                    :marks="{
                        30: '30px',
                        50: '50px'
                    }"
                />
            </ConfigBlock>

            <ConfigBlock :title="t('common.theme.layout.sidebarWidth')">
                <n-slider
                    v-model:value="configStore.layout.sider.width"
                    :min="200"
                    :max="300"
                    :step="1"
                    :marks="{
                        200: '200px',
                        300: '300px'
                    }"
                />
            </ConfigBlock>

            <ConfigBlock :title="t('common.theme.layout.footerHeight')">
                <n-slider
                    v-model:value="configStore.layout.footer.height"
                    :min="20"
                    :max="40"
                    :step="1"
                    :marks="{
                        20: '20px',
                        40: '40px'
                    }"
                />
            </ConfigBlock>

            <ConfigBlock :title="t('common.theme.layout.marginWidth')">
                <n-slider
                    v-model:value="configStore.layout.margin"
                    :min="10"
                    :max="30"
                    :step="1"
                    :marks="{
                        10: '10px',
                        30: '30px'
                    }"
                />
            </ConfigBlock>

            <ConfigBlock :title="t('common.theme.layout.paddingWidth')">
                <n-slider
                    v-model:value="configStore.layout.padding"
                    :min="10"
                    :max="30"
                    :step="1"
                    :marks="{
                        10: '10px',
                        30: '30px'
                    }"
                />
            </ConfigBlock>

            <ConfigBlock :title="t('common.theme.title')">
                <n-select
                    v-model:value="lang"
                    :options="langs"
                ></n-select>
            </ConfigBlock>

            <ConfigBlock :title="t('common.theme.animation.title')">
                <n-select
                    v-model:value="animation"
                    :options="animations"
                ></n-select>
            </ConfigBlock>
        </n-drawer-content>
    </n-drawer>
</template>

<script lang="jsx" setup>
import {Settings, Checkmark} from '@vicons/carbon';
import {useConfigStore} from '@/stores/config';
import ConfigBlock from './ConfigBlock.vue';
import i18n from '@/i18n';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

const animations = computed(() => [
    {label: t('common.theme.animation.fade'), value: 'fade'},
    {label: t('common.theme.animation.slide'), value: 'slide'},
    {label: t('common.theme.animation.zoom'), value: 'zoom'},
    {label: t('common.theme.animation.bounce'), value: 'bounce'},
    {label: t('common.theme.animation.rotate'), value: 'rotate'}
]);

const animation = computed({
    get() {
        return configStore.animation;
    },
    set(value) {
        configStore.setAnimation(value);
    }
});

const langs = computed(() => {
    console.log(i18n);
    return i18n.global.availableLocales.map((el) => ({
        label: i18n.global.t(`system.lang.${el}`),
        value: el
    }));
});
const lang = computed({
    get() {
        return configStore.lang;
    },
    set(value) {
        configStore.setLang(value);
    }
});

const configStore = useConfigStore();

const data = reactive({
    show: false
});
</script>

<style lang="scss" scoped>
.color {
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
}
</style>

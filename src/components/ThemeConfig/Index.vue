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
        <n-drawer-content title="主题设置">
            <ConfigBlock title="主题色">
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

            <ConfigBlock title="布局-页头高度">
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

            <ConfigBlock title="布局-页签高度">
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

            <ConfigBlock title="布局-侧边栏宽度">
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

            <ConfigBlock title="布局-页脚高度">
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

            <ConfigBlock title="布局-外边距宽度">
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

            <ConfigBlock title="布局-内边距宽度">
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

            <ConfigBlock title="国际化">
                <n-select
                    v-model:value="lang"
                    :options="langs"
                ></n-select>
            </ConfigBlock>
        </n-drawer-content>
    </n-drawer>
</template>

<script lang="jsx" setup>
import { Settings, Checkmark } from "@vicons/carbon";
import { useConfigStore } from "@/stores/config";
import ConfigBlock from "./ConfigBlock.vue";
import i18n from "@/i18n";

const langs = computed(() => {
    return i18n.global.availableLocales.map((el) => ({
        label: el,
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

<template>
    <n-flex
        class="head-bar"
        :style="style"
        :wrap="false"
        align="center"
        justify="space-between"
    >
        <n-flex
            :size="configStore.layout.padding"
            align="center"
        >
            <n-image
                :width="configStore.layout.header.height * configStore.goldenRatio"
                :height="configStore.layout.header.height"
                object-fit="cover"
                :src="globalStore.logo"
            ></n-image>
        </n-flex>
        <n-flex
            :size="configStore.layout.padding"
            align="center"
        >
            <ThemeConfig></ThemeConfig>
            <div class="placeholder"></div>
        </n-flex>
    </n-flex>
</template>

<script lang="jsx" setup>
import ThemeConfig from "@/components/ThemeConfig/Index.vue";
import { useConfigStore } from "@/stores/config";
import { useGlobalStore } from "@/stores/global";

const configStore = useConfigStore();
const style = computed(() => {
    return {
        height: `${configStore.layout.header.height}px`
    };
});

const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.head-bar {
    .placeholder {
        width: 10px;
    }
}
</style>

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
            <n-button
                type="primary"
                size="small"
                text
                @click="refreshPage"
            >
                <YsIcon>
                    <Rotate360></Rotate360>
                </YsIcon>
            </n-button>
            <n-button
                type="primary"
                size="small"
                text
                @click="toggleFullscreen"
            >
                <YsIcon>
                    <Maximize v-if="!isFullscreen"></Maximize>
                    <Minimize v-else></Minimize>
                </YsIcon>
            </n-button>
            <ThemeConfig></ThemeConfig>
            <UserAvatar></UserAvatar>
            <div class="placeholder"></div>
        </n-flex>
    </n-flex>
</template>

<script lang="jsx" setup>
import ThemeConfig from "@/components/ThemeConfig/Index.vue";
import UserAvatar from "@/components/UserAvatar/Index.vue";
import { useConfigStore } from "@/stores/config";
import { useGlobalStore } from "@/stores/global";

const configStore = useConfigStore();
const style = computed(() => {
    return {
        height: `${configStore.layout.header.height}px`
    };
});

const globalStore = useGlobalStore();

import { Rotate360, Maximize, Minimize } from "@vicons/carbon";
import YsIcon from "@/components/YsIcon.vue";

const isFullscreen = ref(false);

const refreshPage = () => {
    window.location.reload();
};

const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        isFullscreen.value = true;
    } else {
        document.exitFullscreen();
        isFullscreen.value = false;
    }
};

document.addEventListener("fullscreenchange", () => {
    isFullscreen.value = !!document.fullscreenElement;
});
</script>

<style lang="scss" scoped>
.head-bar {
    .placeholder {
        width: 10px;
    }
}
</style>

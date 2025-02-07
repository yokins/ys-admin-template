<template>
    <n-icon
        :size="props.size || configStore.layout.iconSize"
        :color="props.color || configStore.theme.colors.primary"
    >
        <slot></slot>
    </n-icon>
</template>

<script lang="jsx" setup>
import {useConfigStore} from '@/stores/config';

const configStore = useConfigStore();

const props = defineProps({
    size: {
        type: Number,
        default: 0
    },
    color: {
        type: String,
        default: ''
    }
});
</script>

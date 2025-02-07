<template>
    <n-card
        :bordered="false"
        size="small"
        content-style="padding: 0;"
    >
        <template #header>
            <n-divider style="margin: 0"> {{ props.title }} </n-divider>
        </template>

        <slot></slot>
    </n-card>
</template>

<script lang="jsx" setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
});
</script>

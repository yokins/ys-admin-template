<template>
    <div>roles</div>
    <n-date-picker
        v-model:value="timestamp"
        type="date"
    />
</template>

<script lang="jsx" setup>
const timestamp = ref(null);
</script>

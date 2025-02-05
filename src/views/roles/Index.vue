<template>
    <div>
        roles

        <n-date-picker
            v-model:value="timestamp"
            type="date"
        />
    </div>
</template>

<script lang="jsx" setup>
const timestamp = ref(null);
</script>

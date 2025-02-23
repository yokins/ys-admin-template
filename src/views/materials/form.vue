<template>
    <n-card>
        <n-form
            ref="formRef"
            :model="formData"
            :rules="rules"
            label-placement="left"
            label-width="auto"
            require-mark-placement="right-hanging"
            size="medium"
        >
            <n-form-item
                label="素材名称"
                path="name"
            >
                <n-input
                    v-model:value="formData.name"
                    placeholder="请输入素材名称"
                />
            </n-form-item>

            <n-form-item
                label="描述"
                path="description"
            >
                <n-input
                    v-model:value="formData.description"
                    type="textarea"
                    placeholder="请输入素材描述"
                />
            </n-form-item>

            <n-space justify="center">
                <n-button
                    type="primary"
                    @click="handleSubmit"
                >
                    提交
                </n-button>
                <n-button @click="handleCancel">取消</n-button>
            </n-space>
        </n-form>
    </n-card>
</template>

<script setup>
import {ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useMessage} from 'naive-ui';

const route = useRoute();
const router = useRouter();
const message = useMessage();

const formRef = ref(null);
const formData = ref({
    name: '',
    description: ''
});

const rules = {
    name: {
        required: true,
        message: '请输入素材名称',
        trigger: ['blur', 'input']
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    formRef.value?.validate(async (errors) => {
        if (!errors) {
            // TODO: 实现保存功能
            message.success('保存成功');
            router.push('/materials');
        }
    });
};

const handleCancel = () => {
    router.push('/materials');
};
</script>

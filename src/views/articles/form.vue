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
                label="标题"
                path="title"
            >
                <n-input
                    v-model:value="formData.title"
                    placeholder="请输入文章标题"
                />
            </n-form-item>

            <n-form-item
                label="所属栏目"
                path="categoryId"
            >
                <n-select
                    v-model:value="formData.categoryId"
                    :options="categoryOptions"
                    placeholder="请选择所属栏目"
                />
            </n-form-item>

            <n-form-item
                label="内容"
                path="content"
            >
                <n-flex vertical>
                    <n-button-group>
                        <n-button ghost>图片</n-button>
                        <n-button ghost>视频</n-button>
                        <n-button ghost>超链接</n-button>
                        <n-button
                            ghost
                            @click="handleClickPage"
                            >页面</n-button
                        >
                    </n-button-group>
                    <div style="border: 1px solid #ccc">
                        <Toolbar
                            style="border-bottom: 1px solid #ccc"
                            :editor="editorRef"
                            :defaultConfig="toolbarConfig"
                            :mode="mode"
                        />
                        <Editor
                            style="height: 500px; overflow-y: hidden"
                            v-model="valueHtml"
                            :defaultConfig="editorConfig"
                            :mode="mode"
                            @onCreated="handleCreated"
                        />
                    </div>
                </n-flex>

                <!--<n-input
                    v-model:value="formData.content"
                    type="textarea"
                    :autosize="{
                        minRows: 5,
                        maxRows: 10
                    }"
                    placeholder="请输入文章内容"
                />-->
            </n-form-item>

            <n-form-item
                label="发布时间"
                path="publishTime"
            >
                <n-date-picker
                    v-model:value="formData.publishTime"
                    type="datetime"
                    placeholder="请选择发布时间"
                    :is-date-disabled="disablePastDates"
                />
            </n-form-item>

            <n-form-item
                label="状态"
                path="status"
            >
                <n-radio-group v-model:value="formData.status">
                    <n-space>
                        <n-radio value="draft">草稿</n-radio>
                        <n-radio value="published">已发布</n-radio>
                        <n-radio value="scheduled">定时发布</n-radio>
                        <n-radio value="unpublished">下架</n-radio>
                    </n-space>
                </n-radio-group>
            </n-form-item>

            <n-space justify="center">
                <n-button
                    type="primary"
                    @click="handleSubmit"
                >
                    提交
                </n-button>
                <n-button
                    type="info"
                    @click="handlePreview"
                >
                    预览
                </n-button>
                <n-button @click="handleCancel">取消</n-button>
            </n-space>
        </n-form>
    </n-card>

    <n-modal
        v-model:show="data.show"
        title="页面"
        preset="card"
        style="width: 800px; height: 90vh"
        transform-origin="center"
    >
        <n-grid
            :x-gap="12"
            :y-gap="12"
            :cols="3"
        >
            <template
                v-for="(i, index) in 6"
                :key="index"
            >
                <n-grid-item>
                    <n-card title="页面1">
                        <template #cover>
                            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                        </template>
                        页面1
                    </n-card>
                </n-grid-item>
            </template>
        </n-grid>
    </n-modal>

    <!-- <n-modal
        :show="data.show"
        style="width: 800px; height: 90vh"
        transform-origin="center"
    >
        <div>
            <n-grid
                :x-gap="12"
                :y-gap="12"
                :cols="4"
            >
                <template
                    v-for="(i, index) in 7"
                    :key="index"
                >
                    <n-grid-item>
                        <n-card title="页面1">
                            <template #cover>
                                <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                            </template>
                            页面1
                        </n-card>
                    </n-grid-item>
                </template>
            </n-grid>
        </div>
    </n-modal> -->
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router';
import {useMessage} from 'naive-ui';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import {onBeforeUnmount, ref, shallowRef, onMounted} from 'vue';
import {Editor, Toolbar} from '@wangeditor/editor-for-vue';

const data = reactive({
    show: false
});

const route = useRoute();
const router = useRouter();
const message = useMessage();

const formRef = ref(null);
const formData = ref({
    title: '',
    categoryId: null,
    content: '',
    status: 'draft',
    publishTime: null
});

const categoryOptions = [
    {
        label: '新闻动态',
        value: 1
    },
    {
        label: '产品介绍',
        value: 2
    }
];

const rules = {
    title: {
        required: true,
        message: '请输入文章标题',
        trigger: ['blur', 'input']
    },
    categoryId: {
        type: 'number',
        required: true,
        message: '请选择所属栏目',
        trigger: ['blur', 'change']
    },
    content: {
        required: true,
        message: '请输入文章内容',
        trigger: ['blur', 'input']
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    formRef.value?.validate(async (errors) => {
        if (!errors) {
            // TODO: 实现保存功能
            message.success('保存成功');
            router.push('/articles');
        }
    });
};

const handleCancel = () => {
    router.push('/articles');
};

const handlePreview = () => {
    // TODO: 实现预览功能
    window.open(`/articles/preview/${route.params.id}`, '_blank');
};

const disablePastDates = (timestamp) => {
    return timestamp < Date.now();
};

const mode = ref('default');

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref('<p>hello</p>');

// 监听valueHtml变化，同步到formData.content
watch(valueHtml, (newValue) => {
    formData.value.content = newValue;
});

// 模拟 ajax 异步获取内容
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = '';
    }, 1500);
});

const handleClickPage = () => {
    data.show = true;
};

const toolbarConfig = {};
const editorConfig = {placeholder: '请输入内容...'};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;
    editor.destroy();
});

const handleCreated = (editor) => {
    editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>

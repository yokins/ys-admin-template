<template>
    <n-card>
        <template #header>
            <n-space justify="space-between">
                <n-space>
                    <n-button
                        type="primary"
                        @click="handleCreate"
                    >
                        新建栏目
                    </n-button>
                </n-space>
            </n-space>
        </template>

        <n-data-table
            :columns="columns"
            :data="tableData"
            :loading="loading"
        />
    </n-card>
</template>

<script setup>
import {h, ref} from 'vue';
import {useRouter} from 'vue-router';
import {NButton, NSpace, useMessage} from 'naive-ui';

const router = useRouter();
const message = useMessage();

const loading = ref(false);
const tableData = ref([
    {
        id: 1,
        name: '新闻动态',
        description: '公司新闻和行业动态'
    },
    {
        id: 2,
        name: '产品介绍',
        description: '产品相关信息'
    }
]);

const handleCreate = () => {
    router.push('/categories/new');
};

const handleEdit = (row) => {
    router.push(`/categories/${row.id}/edit`);
};

const handleDelete = async (row) => {
    // TODO: 实现删除功能
    message.success('删除成功');
};

const columns = [
    {
        title: 'ID',
        key: 'id'
    },
    {
        title: '栏目名称',
        key: 'name'
    },
    {
        title: '描述',
        key: 'description'
    },
    {
        title: '操作',
        key: 'actions',
        render(row) {
            return h(NSpace, null, {
                default: () => [
                    h(
                        NButton,
                        {
                            size: 'small',
                            onClick: () => handleEdit(row)
                        },
                        {default: () => '编辑'}
                    ),
                    h(
                        NButton,
                        {
                            size: 'small',
                            type: 'error',
                            onClick: () => handleDelete(row)
                        },
                        {default: () => '删除'}
                    )
                ]
            });
        }
    }
];
</script>
<template>
    <n-card>
        <template #header>
            <n-space justify="space-between">
                <n-space>
                    <n-button
                        type="primary"
                        @click="handleCreate"
                    >
                        新建文章
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
import {NButton, NSpace, NTag, useMessage} from 'naive-ui';

const router = useRouter();
const message = useMessage();

const loading = ref(false);
const tableData = ref([
    {
        id: 1,
        title: '公司新产品发布会',
        category: {
            id: 1,
            name: '新闻动态'
        },
        status: 'published',
        createTime: '2024-01-20 10:00:00'
    },
    {
        id: 2,
        title: '产品功能介绍',
        category: {
            id: 2,
            name: '产品介绍'
        },
        status: 'draft',
        createTime: '2024-01-19 15:30:00'
    }
]);

const handleCreate = () => {
    router.push('/articles/new');
};

const handleEdit = (row) => {
    router.push(`/articles/${row.id}/edit`);
};

const handleDelete = async (row) => {
    // TODO: 实现删除功能
    message.success('删除成功');
};

const handlePreview = (row) => {
    window.open(`/articles/preview/${row.id}`, '_blank');
};

const handleToggleStatus = (row) => {
    const newStatus = row.status === 'published' ? 'unpublished' : 'published';
    // TODO: 实现状态切换功能
    row.status = newStatus;
    message.success(`文章已${newStatus === 'published' ? '上架' : '下架'}`);
};

const columns = [
    {
        title: 'ID',
        key: 'id'
    },
    {
        title: '标题',
        key: 'title'
    },
    {
        title: '所属栏目',
        key: 'category',
        render(row) {
            return h(NTag, {type: 'info'}, {default: () => row.category.name});
        }
    },
    {
        title: '状态',
        key: 'status',
        render(row) {
            const statusMap = {
                published: {type: 'success', text: '已发布'},
                draft: {type: 'warning', text: '草稿'},
                scheduled: {type: 'info', text: '定时发布'},
                unpublished: {type: 'error', text: '已下架'}
            };
            const status = statusMap[row.status];
            return h(NTag, {type: status.type}, {default: () => status.text});
        }
    },
    {
        title: '创建时间',
        key: 'createTime'
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
                            type: 'info',
                            onClick: () => handlePreview(row)
                        },
                        {default: () => '预览'}
                    ),
                    h(
                        NButton,
                        {
                            size: 'small',
                            type: row.status === 'published' ? 'warning' : 'success',
                            onClick: () => handleToggleStatus(row)
                        },
                        {default: () => row.status === 'published' ? '下架' : '上架'}
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
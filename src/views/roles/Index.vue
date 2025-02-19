<template>
    <div class="roles-container">
        <n-card class="main-card">
            <template #header>
                <div class="header-content">
                    <h2 class="title">角色管理</h2>
                    <n-button
                        type="primary"
                        @click="handleAddRole"
                    >
                        <template #icon>
                            <n-icon><add-outline /></n-icon>
                        </template>
                        添加角色
                    </n-button>
                </div>
            </template>

            <div class="search-area">
                <n-input
                    v-model:value="searchQuery"
                    placeholder="搜索角色名称或描述"
                    class="search-input"
                >
                    <template #prefix>
                        <n-icon><search-outline /></n-icon>
                    </template>
                </n-input>
                <n-select
                    v-model:value="statusFilter"
                    :options="statusOptions"
                    placeholder="角色状态"
                    class="status-filter"
                />
            </div>

            <n-data-table
                :columns="columns"
                :data="filteredRoles"
                :pagination="pagination"
                :bordered="false"
                striped
            />
        </n-card>
    </div>
</template>

<script lang="jsx" setup>
import {ref, computed} from 'vue';
import {NCard, NButton, NInput, NSelect, NDataTable, NIcon, NTag, useMessage} from 'naive-ui';
import {SearchOutline, AddOutline, CreateOutline, TrashOutline} from '@vicons/ionicons5';

const message = useMessage();
const searchQuery = ref('');
const statusFilter = ref(null);

const statusOptions = [
    {label: '全部', value: null},
    {label: '启用', value: 'active'},
    {label: '禁用', value: 'disabled'}
];

// 模拟角色数据
const roles = ref([
    {
        id: 1,
        name: '超级管理员',
        description: '系统最高权限角色',
        permissions: ['all'],
        status: 'active',
        createTime: '2023-12-01 10:00:00'
    },
    {
        id: 2,
        name: '内容编辑',
        description: '内容管理相关权限',
        permissions: ['content.read', 'content.write'],
        status: 'active',
        createTime: '2023-12-02 14:30:00'
    },
    {
        id: 3,
        name: '访客',
        description: '基础查看权限',
        permissions: ['content.read'],
        status: 'disabled',
        createTime: '2023-12-03 09:15:00'
    }
]);

const columns = [
    {title: '角色名称', key: 'name'},
    {title: '描述', key: 'description'},
    {
        title: '权限范围',
        key: 'permissions',
        render(row) {
            return row.permissions.join(', ');
        }
    },
    {
        title: '状态',
        key: 'status',
        render(row) {
            return (
                <NTag
                    type={row.status === 'active' ? 'success' : 'error'}
                    round
                >
                    {row.status === 'active' ? '启用' : '禁用'}
                </NTag>
            );
        }
    },
    {title: '创建时间', key: 'createTime'},
    {
        title: '操作',
        key: 'actions',
        render(row) {
            return [
                <NButton
                    quaternary
                    circle
                    type="info"
                    size="small"
                    onClick={() => handleEditRole(row)}
                >
                    {{icon: () => <CreateOutline />}}
                </NButton>,
                <NButton
                    quaternary
                    circle
                    type="error"
                    size="small"
                    onClick={() => handleDeleteRole(row)}
                >
                    {{icon: () => <TrashOutline />}}
                </NButton>
            ];
        }
    }
];

const pagination = {
    pageSize: 10
};

const filteredRoles = computed(() => {
    return roles.value.filter((role) => {
        const matchesSearch = searchQuery.value
            ? role.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
              role.description.toLowerCase().includes(searchQuery.value.toLowerCase())
            : true;

        const matchesStatus = statusFilter.value ? role.status === statusFilter.value : true;

        return matchesSearch && matchesStatus;
    });
});

const handleAddRole = () => {
    message.info('点击了添加角色');
};

const handleEditRole = (role) => {
    message.info(`点击了编辑角色：${role.name}`);
};

const handleDeleteRole = (role) => {
    message.info(`点击了删除角色：${role.name}`);
};
</script>

<style scoped>
.roles-container {
    /* padding: 20px;
    max-width: 1200px;
    margin: 0 auto; */
}

.main-card {
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease;
}

.main-card:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 20px;
    font-weight: 500;
    color: #1f2937;
    margin: 0;
}

.search-area {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
}

.search-input {
    max-width: 300px;
}

.status-filter {
    width: 150px;
}
</style>

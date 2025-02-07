<template>
    <div class="users-container">
        <n-card class="main-card">
            <template #header>
                <div class="header-content">
                    <h2 class="title">用户管理</h2>
                    <n-button
                        type="primary"
                        @click="handleAddUser"
                    >
                        <template #icon>
                            <n-icon><add-outline /></n-icon>
                        </template>
                        添加用户
                    </n-button>
                </div>
            </template>

            <div class="search-area">
                <n-input
                    v-model:value="searchQuery"
                    placeholder="搜索用户名、邮箱或角色"
                    class="search-input"
                >
                    <template #prefix>
                        <n-icon><search-outline /></n-icon>
                    </template>
                </n-input>
                <n-select
                    v-model:value="statusFilter"
                    :options="statusOptions"
                    placeholder="用户状态"
                    class="status-filter"
                />
            </div>

            <n-data-table
                :columns="columns"
                :data="filteredUsers"
                :pagination="pagination"
                :bordered="false"
                striped
            />
        </n-card>
    </div>
</template>

<script lang="jsx" setup>
import {ref, computed} from 'vue';
import {NCard, NButton, NInput, NSelect, NDataTable, NIcon, useMessage} from 'naive-ui';
import {SearchOutline, AddOutline, CreateOutline, TrashOutline} from '@vicons/ionicons5';

const router = useRouter();
const message = useMessage();
const searchQuery = ref('');
const statusFilter = ref(null);

const statusOptions = [
    {label: '全部', value: null},
    {label: '活跃', value: 'active'},
    {label: '禁用', value: 'disabled'}
];

// 模拟用户数据
const users = ref([
    {id: 1, username: '张三', email: 'zhangsan@example.com', role: '管理员', status: 'active', lastLogin: '2023-12-01 12:00:00'},
    {id: 2, username: '李四', email: 'lisi@example.com', role: '编辑者', status: 'active', lastLogin: '2023-12-02 14:30:00'},
    {id: 3, username: '王五', email: 'wangwu@example.com', role: '访客', status: 'disabled', lastLogin: '2023-11-30 09:15:00'}
]);

const columns = [
    {title: '用户名', key: 'username'},
    {title: '邮箱', key: 'email'},
    {title: '角色', key: 'role'},
    {
        title: '状态',
        key: 'status',
        render(row) {
            return (
                <NTag
                    type={row.status === 'active' ? 'success' : 'error'}
                    round
                >
                    {row.status === 'active' ? '活跃' : '禁用'}
                </NTag>
            );
        }
    },
    {title: '最后登录', key: 'lastLogin'},
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
                    onClick={() => handleEditUser(row)}
                >
                    {{icon: () => <CreateOutline />}}
                </NButton>,
                <NButton
                    quaternary
                    circle
                    type="error"
                    size="small"
                    onClick={() => handleDeleteUser(row)}
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

const filteredUsers = computed(() => {
    return users.value.filter((user) => {
        const matchesSearch = searchQuery.value
            ? user.username.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
              user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
              user.role.toLowerCase().includes(searchQuery.value.toLowerCase())
            : true;

        const matchesStatus = statusFilter.value ? user.status === statusFilter.value : true;

        return matchesSearch && matchesStatus;
    });
});

const handleAddUser = () => {
    message.info('点击了添加用户');
    router.push({name: 'users_new', params: {}});
};

const handleEditUser = (user) => {
    message.info(`点击了编辑用户：${user.username}`);
    router.push({name: 'users_edit', params: {id: user.id}});
};

const handleDeleteUser = (user) => {
    message.info(`点击了删除用户：${user.username}`);
};
</script>

<style scoped>
.users-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
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

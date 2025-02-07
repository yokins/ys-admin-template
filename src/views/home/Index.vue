<template>
    <div class="dashboard-container">
        <!-- 统计卡片区域 -->
        <div class="stats-section">
            <n-card class="stats-card user-stats">
                <template #header>
                    <div class="card-header">
                        <h3 class="card-title">用户统计</h3>
                        <n-icon
                            size="20"
                            class="header-icon"
                        >
                            <people-outline />
                        </n-icon>
                    </div>
                </template>
                <div class="stats-content">
                    <div class="stats-item">
                        <div class="stats-value">128</div>
                        <div class="stats-label">总用户数</div>
                    </div>
                    <div class="stats-item">
                        <div class="stats-value">24</div>
                        <div class="stats-label">今日活跃</div>
                    </div>
                    <div class="stats-item">
                        <div class="stats-value">8</div>
                        <div class="stats-label">新增用户</div>
                    </div>
                </div>
                <div class="stats-chart">
                    <n-progress
                        type="line"
                        :percentage="75"
                        :height="6"
                        :border-radius="4"
                        color="#36ad6a"
                    />
                    <div class="chart-label">用户增长趋势</div>
                </div>
            </n-card>

            <n-card class="stats-card role-stats">
                <template #header>
                    <div class="card-header">
                        <h3 class="card-title">角色统计</h3>
                        <n-icon
                            size="20"
                            class="header-icon"
                        >
                            <shield-checkmark-outline />
                        </n-icon>
                    </div>
                </template>
                <div class="stats-content">
                    <div class="stats-item">
                        <div class="stats-value">5</div>
                        <div class="stats-label">角色类型</div>
                    </div>
                    <div class="stats-item">
                        <div class="stats-value">12</div>
                        <div class="stats-label">权限组</div>
                    </div>
                    <div class="stats-item">
                        <div class="stats-value">86</div>
                        <div class="stats-label">已分配</div>
                    </div>
                </div>
                <div class="role-distribution">
                    <div class="distribution-item">
                        <span class="label">管理员</span>
                        <n-progress
                            type="line"
                            :percentage="20"
                            :height="4"
                            :border-radius="4"
                            color="#2080f0"
                        />
                    </div>
                    <div class="distribution-item">
                        <span class="label">编辑者</span>
                        <n-progress
                            type="line"
                            :percentage="35"
                            :height="4"
                            :border-radius="4"
                            color="#36ad6a"
                        />
                    </div>
                    <div class="distribution-item">
                        <span class="label">访客</span>
                        <n-progress
                            type="line"
                            :percentage="45"
                            :height="4"
                            :border-radius="4"
                            color="#f0a020"
                        />
                    </div>
                </div>
            </n-card>
        </div>

        <!-- 聊天和任务区域 -->
        <div class="interactive-section">
            <n-card class="chat-card">
                <template #header>
                    <div class="card-header">
                        <h3 class="card-title">在线聊天</h3>
                        <n-badge
                            :value="3"
                            :max="99"
                            type="success"
                        >
                            <n-icon
                                size="20"
                                class="header-icon"
                            >
                                <chatbox-ellipses-outline />
                            </n-icon>
                        </n-badge>
                    </div>
                </template>
                <div class="chat-container">
                    <div class="chat-messages">
                        <div class="message received">
                            <n-avatar
                                size="small"
                                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                            />
                            <div class="message-content">
                                <div class="message-info">
                                    <span class="sender">张三</span>
                                    <span class="time">10:30</span>
                                </div>
                                <div class="message-text">早上好！今天的会议准备得怎么样了？</div>
                            </div>
                        </div>
                        <div class="message sent">
                            <div class="message-content">
                                <div class="message-info">
                                    <span class="time">10:32</span>
                                    <span class="sender">我</span>
                                </div>
                                <div class="message-text">材料都已经准备好了，可以开始了。</div>
                            </div>
                            <n-avatar
                                size="small"
                                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                            />
                        </div>
                    </div>
                    <div class="chat-input">
                        <n-input
                            v-model:value="messageText"
                            type="text"
                            placeholder="输入消息..."
                            round
                        >
                            <template #suffix>
                                <n-button
                                    quaternary
                                    circle
                                    type="primary"
                                    @click="sendMessage"
                                >
                                    <template #icon>
                                        <n-icon><send-outline /></n-icon>
                                    </template>
                                </n-button>
                            </template>
                        </n-input>
                    </div>
                </div>
            </n-card>

            <n-card class="tasks-card">
                <template #header>
                    <div class="card-header">
                        <h3 class="card-title">任务列表</h3>
                        <n-button
                            quaternary
                            circle
                            type="primary"
                            @click="addTask"
                        >
                            <template #icon>
                                <n-icon><add-outline /></n-icon>
                            </template>
                        </n-button>
                    </div>
                </template>
                <div class="tasks-container">
                    <n-list>
                        <n-list-item
                            v-for="task in tasks"
                            :key="task.id"
                        >
                            <div class="task-item">
                                <div class="task-content">
                                    <n-checkbox
                                        v-model:checked="task.completed"
                                        @update:checked="toggleTask(task)"
                                    >
                                        <span :class="{completed: task.completed}">
                                            {{ task.title }}
                                        </span>
                                    </n-checkbox>
                                    <n-tag
                                        :type="task.priority"
                                        size="small"
                                        round
                                    >
                                        {{ task.priorityText }}
                                    </n-tag>
                                </div>
                                <div class="task-meta">
                                    <span class="task-date">{{ task.dueDate }}</span>
                                    <n-button
                                        quaternary
                                        circle
                                        type="error"
                                        size="small"
                                        @click="deleteTask(task)"
                                    >
                                        <template #icon>
                                            <n-icon><trash-outline /></n-icon>
                                        </template>
                                    </n-button>
                                </div>
                            </div>
                        </n-list-item>
                    </n-list>
                </div>
            </n-card>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {NCard, NIcon, NProgress, NBadge, NAvatar, NInput, NButton, NList, NListItem, NCheckbox, NTag} from 'naive-ui';
import {PeopleOutline, ShieldCheckmarkOutline, ChatboxEllipsesOutline, SendOutline, AddOutline, TrashOutline} from '@vicons/ionicons5';

// 消息输入
const messageText = ref('');

// 发送消息
const sendMessage = () => {
    if (messageText.value.trim()) {
        // 这里添加发送消息的逻辑
        messageText.value = '';
    }
};

// 任务列表数据
const tasks = ref([
    {
        id: 1,
        title: '完成控制面板设计',
        completed: false,
        priority: 'error',
        priorityText: '高',
        dueDate: '2023-12-25'
    },
    {
        id: 2,
        title: '用户反馈处理',
        completed: true,
        priority: 'warning',
        priorityText: '中',
        dueDate: '2023-12-26'
    },
    {
        id: 3,
        title: '系统性能优化',
        completed: false,
        priority: 'info',
        priorityText: '低',
        dueDate: '2023-12-27'
    }
]);

// 添加任务
const addTask = () => {
    // 这里添加新建任务的逻辑
};

// 切换任务状态
const toggleTask = (task) => {
    task.completed = !task.completed;
};

// 删除任务
const deleteTask = (task) => {
    const index = tasks.value.findIndex((t) => t.id === task.id);
    if (index > -1) {
        tasks.value.splice(index, 1);
    }
};
</script>

<style scoped>
.dashboard-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.stats-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.stats-card {
    border-radius: 16px;
    transition: all 0.3s ease;
}

.stats-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card-title {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #1f2937;
}

.header-icon {
    color: #6b7280;
}

.stats-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.stats-item {
    text-align: center;
}

.stats-value {
    font-size: 24px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 4px;
}

.stats-label {
    font-size: 14px;
    color: #6b7280;
}

.stats-chart {
    margin-top: 16px;
}

.chart-label {
    font-size: 12px;
    color: #6b7280;
    margin-top: 8px;
    text-align: center;
}

.role-distribution {
    margin-top: 16px;
}

.distribution-item {
    margin-bottom: 12px;
}

.distribution-item .label {
    display: block;
    font-size: 14px;
    color: #4b5563;
    margin-bottom: 4px;
}

.interactive-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.chat-card,
.tasks-card {
    border-radius: 16px;
    transition: all 0.3s ease;
}

.chat-container {
    height: 400px;
    display: flex;
    flex-direction: column;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
}

.message {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
    gap: 8px;
}

.message.sent {
    flex-direction: row-reverse;
}

.message-content {
    max-width: 70%;
}

.message-info {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
}

.message.sent .message-info {
    flex-direction: row-reverse;
}

.sender {
    font-size: 12px;
    color: #6b7280;
}

.time {
    font-size: 12px;
    color: #9ca3af;
}

.message-text {
    background: #f3f4f6;
    padding: 8px 12px;
    border-radius: 12px;
    font-size: 14px;
    color: #1f2937;
}

.message.sent .message-text {
    background: #2563eb;
    color: white;
}

.chat-input {
    padding: 16px;
    background: #ffffff;
    border-top: 1px solid #e5e7eb;
}

.tasks-container {
    height: 400px;
    overflow-y: auto;
    padding: 16px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    transition: all 0.3s ease;
}

.task-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.completed {
    text-decoration: line-through;
    color: #9ca3af;
}

.task-meta {
    display: flex;
    align-items: center;
    gap: 12px;
}

.task-date {
    font-size: 12px;
    color: #6b7280;
}

/* 自定义滚动条样式 */
.tasks-container::-webkit-scrollbar {
    width: 6px;
}

.tasks-container::-webkit-scrollbar-track {
    background: #f3f4f6;
    border-radius: 3px;
}

.tasks-container::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 3px;
}

.tasks-container::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
}

.message.sent .message-text {
    background: #2563eb;
    color: white;
}

.chat-input {
    padding: 16px;
    background: #ffffff;
    border-top: 1px solid #e5e7eb;
}
</style>

<template>
    <div class="login-container">
        <div class="login-background">
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
        </div>

        <n-card
            class="login-card"
            :bordered="false"
        >
            <div class="login-header">
                <div class="logo-container">
                    <div class="logo-circle">
                        <img
                            :src="LogoPng"
                            alt="Logo"
                            width="32"
                            height="32"
                        />
                    </div>
                </div>
                <h2 class="login-title">欢迎回到YS后台模板</h2>
                <p class="login-subtitle">请登录您的账号</p>
            </div>

            <n-form
                ref="formRef"
                :model="formValue"
                :rules="rules"
                label-placement="left"
                require-mark-placement="right-hanging"
            >
                <n-form-item path="username">
                    <n-input
                        v-model:value="formValue.username"
                        placeholder="用户名"
                        class="login-input"
                    >
                        <template #prefix>
                            <n-icon :component="User" />
                        </template>
                    </n-input>
                </n-form-item>

                <n-form-item path="password">
                    <n-input
                        v-model:value="formValue.password"
                        type="password"
                        placeholder="密码"
                        class="login-input"
                        @keydown.enter="handleLogin"
                    >
                        <template #prefix>
                            <n-icon :component="Password" />
                        </template>
                    </n-input>
                </n-form-item>

                <n-form-item :show-feedback="false">
                    <div class="flex justify-between mb-4">
                        <n-checkbox v-model:checked="rememberMe">
                            <span class="text-sm">记住我</span>
                        </n-checkbox>
                        <n-button
                            text
                            type="primary"
                            class="forgot-password"
                        >
                            忘记密码？
                        </n-button>
                    </div>
                </n-form-item>

                <n-button
                    type="primary"
                    block
                    :loading="loading"
                    @click="handleLogin"
                    class="login-button"
                >
                    {{ loading ? "登录中..." : "登录" }}
                </n-button>
            </n-form>
        </n-card>
    </div>
</template>

<script setup>
import { ref, shallowRef } from "vue";
import { useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import { User, Password } from "@vicons/carbon";
import LogoPng from "@/assets/logo.png";

const router = useRouter();
const message = useMessage();

const formRef = shallowRef(null);
const loading = ref(false);
const rememberMe = ref(false);

// 表单数据
const formValue = ref({
    username: "",
    password: ""
});

// 表单验证规则
const rules = {
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
};

// 登录处理函数
const handleLogin = (e) => {
    e.preventDefault();
    formRef.value?.validate(async (errors) => {
        if (!errors) {
            loading.value = true;
            try {
                // 这里添加您的登录逻辑
                const res = await window.$ys.apis.auth.login(formValue.value);
                console.log("🚀 ~ formRef.value?.validate ~ res:", res);

                // await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟登录请求
                // message.success("登录成功");
                // router.push("/");
            } finally {
                loading.value = false;
            }
        }
    });
};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    position: relative;
    overflow: hidden;
}

.cube {
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    will-change: transform;
    animation: cube-animation 10s linear infinite;
}

.cube:nth-child(1) {
    width: 120px;
    height: 120px;
    top: 20%;
    left: 10%;
    animation: cube-animation 15s ease-in-out infinite;
    background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
}

.cube:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 40%;
    right: 15%;
    animation: cube-animation 20s ease-in-out infinite reverse;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.cube:nth-child(3) {
    width: 80px;
    height: 80px;
    bottom: 30%;
    left: 20%;
    animation: cube-animation 25s ease-in-out infinite;
    background: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}

.cube:nth-child(4) {
    width: 100px;
    height: 100px;
    bottom: 20%;
    right: 25%;
    animation: cube-animation 18s ease-in-out infinite reverse;
    background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
}

.cube:nth-child(5) {
    width: 90px;
    height: 90px;
    top: 30%;
    left: 30%;
    animation: cube-animation 22s ease-in-out infinite;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

@keyframes cube-animation {
    0%,
    100% {
        transform: rotate(0deg) translate3d(0, 0, 0) scale(1);
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        opacity: 0.8;
    }
    33% {
        transform: rotate(120deg) translate3d(50px, 50px, 0) scale(1.2);
        border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
        opacity: 0.6;
    }
    66% {
        transform: rotate(240deg) translate3d(-50px, 50px, 0) scale(0.8);
        border-radius: 50%;
        opacity: 0.9;
    }
}

.login-card {
    width: 100%;
    max-width: 400px;
    margin: 0 16px;
    background: rgba(255, 255, 255, 0.8) !important;
    backdrop-filter: blur(20px);
    border-radius: 20px !important;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 1;
    will-change: transform;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.25);
}

.logo-circle {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #8ec5fc 0%, #e0c3fc 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    will-change: transform;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-circle:hover {
    transform: scale(1.1) rotate(360deg);
    box-shadow: 0 0 20px rgba(142, 197, 252, 0.5);
}

.login-button {
    background: linear-gradient(120deg, #8ec5fc 0%, #e0c3fc 100%);
    border: none;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 22px;
    will-change: transform;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(142, 197, 252, 0.3);
}

.login-title {
    background: linear-gradient(120deg, #8ec5fc 0%, #e0c3fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    text-align: center;
    width: 100%;
    margin: 1rem 0;
}

.login-input :deep(.n-input) {
    border-radius: 20px;
    will-change: transform;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
    overflow: hidden;
}

.login-input :deep(.n-input:hover),
.login-input :deep(.n-input:focus-within) {
    border-color: #8ec5fc;
    box-shadow: 0 0 15px rgba(142, 197, 252, 0.3);
    transform: translateY(-1px);
}

.login-input :deep(.n-input-wrapper) {
    padding: 4px 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

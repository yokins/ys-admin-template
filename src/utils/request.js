/*
 * @Author: Yokin shi
 * @Date: 2025-01-22 12:02:38
 * @LastEditors: Yokin shi
 * @LastEditTime: 2025-01-22 12:09:21
 * @Description: 请输入文件描述
 */
import { useGlobalStore } from "@/stores/global";
import axios from "axios";

const createRequest = ({ baseURL = "", timeout = 10000, headers = {} } = options) => {
    const headers = {
        "Content-Type": "application/json",
        ...headers
    };

    const instance = axios.create({
        baseURL: baseURL,
        timeout: timeout,
        headers
    });

    instance.interceptors.request.use(
        (config) => {
            const globalStore = useGlobalStore();
            if (globalStore?.currentUser?.token) config.headers.Authorization = `Bearer ${globalStore.currentUser.token}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response) => {
            if (response.status === 200) {
                return response.data; // 直接返回接口的 data 数据
            }
            return Promise.reject(new Error("请求失败"));
        },
        (error) => {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        console.error("未授权，请重新登录");
                        // 可以执行登出操作，如清除 token
                        break;
                    case 500:
                        console.error("服务器错误，请稍后重试");
                        break;
                    default:
                        console.error(error.response.data.message || "请求失败");
                }
            }
            return Promise.reject(error);
        }
    );
};
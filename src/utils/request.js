/*
 * @Author: Yokin shi
 * @Date: 2025-01-22 12:02:38
 * @LastEditors: yokins yokins.shi@icloud.com
 * @LastEditTime: 2025-02-05 16:51:19
 * @Description: 请输入文件描述
 */

import {useGlobalStore} from '@/stores/global';
import axios from 'axios';
import {naiveFb} from '@/utils/naive';

const fb = naiveFb();

const createRequest = ({baseURL = '', timeout = 10000, headers = {}} = options) => {
    headers = {
        'Content-Type': 'application/json',
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
            if (globalStore?.currentUser?.token)
                config.headers.Authorization = `Bearer ${globalStore.currentUser.token}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response) => {
            if (response.status === 200) {
                switch (response.data.code) {
                    case 200:
                        return response.data; // 直接返回接口的 data 数据
                    case 401:
                        fb.nte.warning({
                            content: '温馨提示',
                            meta: response.data?.message ?? '未知权限，请重新登录',
                            duration: 2000,
                            keepAliveOnHover: true
                        });
                        return Promise.reject(response.data);
                    case 500:
                        fb.nte.warning({
                            content: '温馨提示',
                            meta: response.data?.message ?? '服务器错误',
                            duration: 2000,
                            keepAliveOnHover: true
                        });
                        return Promise.reject(response.data);
                    default:
                        fb.nte.error({
                            content: '温馨提示',
                            meta: response.data?.message ?? '未知错误',
                            duration: 2000,
                            keepAliveOnHover: true
                        });
                        return Promise.reject(response.data);
                }
            }
            return Promise.reject(new Error('请求失败'));
        },
        (error) => {
            // if (error.response) {
            //     switch (error.response.status) {
            //         case 401:
            //             console.error("未授权，请重新登录");
            //             // 可以执行登出操作，如清除 token
            //             break;
            //         case 500:
            //             console.error("服务器错误，请稍后重试");
            //             break;
            //         default:
            //             console.error(error.response.data.message || "请求失败");
            //     }
            // }
            fb.nte.error({
                content: '温馨提示',
                meta: '服务故障,请刷新页面重试',
                duration: 2000,
                keepAliveOnHover: true
            });
            return Promise.reject(error);
        }
    );

    return instance;
};

export default {
    base: createRequest({
        baseURL: import.meta.env.VITE_API_URL
    })
};

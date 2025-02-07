import menu from './menu';

export default {
    system: {
        title: 'YS后台模版',
        lang: {
            'zh-CN': '简体中文',
            'en-US': 'English'
        }
    },
    menu,
    common: {
        yes: '是',
        no: '否',
        login: {
            welcome: '欢迎回到YS后台模板',
            subtitle: '请登录您的账号',
            username: '用户名',
            password: '密码',
            remember: '记住我',
            forgot: '忘记密码？',
            button: '登录',
            loading: '登录中...',
            success: '登录成功',
            validation: {
                username: '请输入用户名',
                password: '请输入密码'
            }
        },
        userAvatar: {
            profile: '个人信息',
            password: '修改密码',
            logout: '退出登录',
            logoutConfirmTitle: '确认退出',
            logoutConfirmContent: '确定要退出登录吗？',
            logoutSuccess: '退出成功',
            logoutFailed: '退出失败'
        },
        theme: {
            title: '主题设置',
            color: '主题色',
            layout: {
                headerHeight: '布局-页头高度',
                tabHeight: '布局-页签高度',
                sidebarWidth: '布局-侧边栏宽度',
                footerHeight: '布局-页脚高度',
                marginWidth: '布局-外边距宽度',
                paddingWidth: '布局-内边距宽度'
            },
            animation: {
                title: '动画效果',
                fade: '淡入淡出',
                slide: '滑动',
                zoom: '缩放',
                bounce: '弹跳',
                rotate: '旋转'
            }
        },
        tabs: {
            refresh: '刷新',
            close: '关闭',
            closeOthers: '关闭其他',
            unnamed: '未命名页面'
        },
        request: {
            tips: '温馨提示',
            unauthorized: '未知权限，请重新登录',
            serverError: '服务器错误',
            unknownError: '未知错误',
            requestFailed: '请求失败',
            serviceFault: '服务故障,请刷新页面重试'
        }
    }
};

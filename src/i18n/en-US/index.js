import menu from "./menu";

export default {
    system: {
        title: "YS Admin Template",
        lang: {
            "zh-CN": "简体中文",
            "en-US": "English"
        }
    },
    menu,
    common: {
        login: {
            welcome: "Welcome back to YS Admin Template",
            subtitle: "Please login to your account",
            username: "Username",
            password: "Password",
            remember: "Remember me",
            forgot: "Forgot password?",
            button: "Login",
            loading: "Logging in...",
            success: "Login successful",
            validation: {
                username: "Please enter your username",
                password: "Please enter your password"
            }
        },
        userAvatar: {
            profile: "Profile",
            password: "Change Password",
            logout: "Logout"
        },
        theme: {
            title: "Theme Settings",
            color: "Theme Color",
            layout: {
                headerHeight: "Layout - Header Height",
                tabHeight: "Layout - Tab Height",
                sidebarWidth: "Layout - Sidebar Width",
                footerHeight: "Layout - Footer Height",
                marginWidth: "Layout - Margin Width",
                paddingWidth: "Layout - Padding Width"
            },
            animation: {
                title: "Animation Effect",
                fade: "Fade",
                slide: "Slide",
                zoom: "Zoom",
                bounce: "Bounce",
                rotate: "Rotate"
            }
        },
        tabs: {
            refresh: "Refresh",
            close: "Close",
            closeOthers: "Close Others",
            unnamed: "Unnamed Page"
        },
        request: {
            tips: "Tips",
            unauthorized: "Unknown permission, please login again",
            serverError: "Server error",
            unknownError: "Unknown error",
            requestFailed: "Request failed",
            serviceFault: "Service fault, please refresh the page and try again"
        }
    }
};

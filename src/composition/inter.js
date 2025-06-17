import { createDiscreteApi, darkTheme, lightTheme } from "naive-ui";

const useInter = () => {
    const themeRef = ref("light");
    const configProviderPropsRef = computed(() => ({
        theme: themeRef.value === "light" ? lightTheme : darkTheme
    }));

    const { message, notification, dialog, loadingBar, modal } = createDiscreteApi(
        ["message", "dialog", "notification", "loadingBar", "modal"],
        {
            configProviderProps: configProviderPropsRef
        }
    );

    return { message, notification, dialog, loadingBar, modal };
};

export { useInter };

import { useConfigStore } from "@/stores/config";
import { computed } from "vue";

const useAdminStyles = () => {
    const configStore = useConfigStore();

    const headerStyle = computed(() => {
        return {
            height: `${configStore.layout.header.height}px`,
            position: "relative"
        };
    });

    const siderStyle = computed(() => {
        return {
            position: "relative"
        };
    });

    const tabsStyle = computed(() => {
        return {
            height: `${configStore.layout.tabs.height}px`,
            position: "relative"
        };
    });

    const footerStyle = computed(() => {
        return {
            height: `${configStore.layout.footer.height}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px"
        };
    });

    const layoutStyle = computed(() => {
        return {
            top: `${configStore.layout.header.height}px`,
            bottom: `${configStore.layout.footer.height}px`
        };
    });
    const containerStyle = computed(() => {
        return {
            left: `${configStore.layout.sider.width}px`
        };
    });
    const containerContentStyle = computed(() => {
        return {
            top: `${configStore.layout.tabs.height}px`
        };
    });
    const containerContentContentStyle = computed(() => {
        return {
            padding: `${configStore.layout.sizes.padding}px`,
            boxSizing: "border-box",
            position: "relative",
            minHeight: `calc(100vh - ${configStore.layout.header.height}px - 1px - ${configStore.layout.tabs.height}px - 1px - ${configStore.layout.footer.height}px - 1px)`
        };
    });

    return {
        headerStyle,
        siderStyle,
        tabsStyle,
        footerStyle,

        layoutStyle,
        containerStyle,
        containerContentStyle,
        containerContentContentStyle
    };
};

export { useAdminStyles };

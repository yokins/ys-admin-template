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

    return {
        headerStyle,
        siderStyle,
        tabsStyle,

        containerStyle,
        containerContentStyle
    };
};

export default useAdminStyles;

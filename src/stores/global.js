import i18n from "@/i18n";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
    state: () => {
        return {
            logo: "http://temp.im/300x200/333/EEE",

            currentUser: null
        };
    },
    getters: {},
    actions: {
        setCurrentUser(user = null) {
            this.currentUser = user;
        },
        clearCurrentUser() {
            this.currentUser = null;
        }
    },
    persist: true
});

import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
    state: () => {
        return {
            logo: "http://temp.im/300x200/333/EEE",

            currentUser: null,

            globalLoading: true
        };
    },
    getters: {},
    actions: {
        setCurrentUser(user = null) {
            this.currentUser = user;
        },
        setGlobalLoading(loading = true) {
            this.globalLoading = loading;
        }
    },
    persist: true
});

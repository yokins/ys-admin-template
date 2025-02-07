import {defineStore} from 'pinia';
import {useTabsStore} from './tabs';
import i18n from '@/i18n/index.js';
import {naiveFb} from '@/utils/naive';
export const useGlobalStore = defineStore('global', {
    state: () => {
        return {
            logo: 'http://temp.im/300x200/333/EEE',

            currentUser: null
        };
    },
    getters: {},
    actions: {
        setCurrentUser(user = null) {
            this.currentUser = user;
        },
        clearCurrentUser() {
            const {t} = i18n.global;
            this.currentUser = null;
            const tabStore = useTabsStore();
            tabStore.clearAllTabs();
            naiveFb().msg.success(t('common.userAvatar.logoutSuccess'));
        }
    },
    persist: true
});

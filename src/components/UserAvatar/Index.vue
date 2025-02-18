<template>
    <n-dropdown
        :options="dropdownOptions"
        @select="handleSelect"
        trigger="hover"
    >
        <n-avatar
            v-if="globalStore.currentUser?.avatar"
            :src="globalStore.currentUser.avatar"
            round
            :size="32"
        />
        <n-avatar
            v-else
            round
            :size="32"
        >
            {{ globalStore.currentUser?.username?.charAt(0)?.toUpperCase() || 'U' }}
        </n-avatar>
    </n-dropdown>
</template>

<script setup>
import {computed} from 'vue';
import {useRouter} from 'vue-router';
import {useGlobalStore} from '@/stores/global';
import {useI18n} from 'vue-i18n';
import {useDialog} from 'naive-ui';

const {t} = useI18n();
const router = useRouter();
const dialog = useDialog();
const globalStore = useGlobalStore();

const dropdownOptions = computed(() => [
    {
        key: 'profile',
        label: t('common.userAvatar.profile')
    },
    {
        key: 'password',
        label: t('common.userAvatar.password')
    },
    {
        type: 'divider',
        key: 'd1'
    },
    {
        key: 'logout',
        label: t('common.userAvatar.logout')
    }
]);

const handleSelect = (key) => {
    switch (key) {
        case 'profile':
            router.push('/profile');
            break;
        case 'password':
            router.push('/change-password');
            break;
        case 'logout':
            dialog.warning({
                title: t('common.userAvatar.logoutConfirmTitle'),
                content: t('common.userAvatar.logoutConfirmContent'),
                positiveText: t('common.yes'),
                negativeText: t('common.no'),
                onPositiveClick: async () => {
                    // await window.$ys.apis.auth.logout();
                    globalStore.clearCurrentUser();
                    router.push({name: 'auth_login'});
                }
            });
            break;
    }
};
</script>

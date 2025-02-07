import {createDiscreteApi, darkTheme, lightTheme} from 'naive-ui';

const naiveFb = ({theme = 'light'} = {}) => {
    const {message, notification, dialog} = createDiscreteApi(['message', 'dialog', 'notification'], {
        configProviderProps: {
            theme: theme == 'light' ? lightTheme : darkTheme
        }
    });

    return {
        msg: message,
        nte: notification,
        dlg: dialog
    };
};

export {naiveFb};

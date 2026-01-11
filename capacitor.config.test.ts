import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'de.svbolzum.vereinsmanager.testing',
    appName: 'Vereinsm. (Test)',
    webDir: 'www',
    server: {
        url: 'https://vereinsmanager-cb966.web.app/',
        androidScheme: 'https',
        allowNavigation: [
            '*.web.app',
            'vereinsmanager-pro*.web.app',
            'vereinsmanager-cb*.web.app'
        ]
    },
    plugins: {
        PushNotifications: {
            presentationOptions: ["badge", "sound", "alert"]
        }
    }
};

export default config;

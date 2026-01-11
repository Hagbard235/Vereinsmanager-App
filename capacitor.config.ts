import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.vereinsmanager.pro',
    appName: 'Vereinsmanager',
    webDir: 'www',
    server: {
        // url: 'https://vereinsmanager-pro---prod.web.app/', // Wir starten lokal
        androidScheme: 'https',
        allowNavigation: [
            '*.web.app',
            'vereinsmanager-pro*.web.app'
        ]
    }
};

export default config;

const data = require("./data")

const DEFAULT_PORT = 4723;
export const caps = {
    androidCaps: {
        appiumV2: true,
        // 'app': `${process.cwd()}\\app_files\\qa-v20100017.apk`,
        'platform': 'android',
        'device': 'emulator-5554',
        'port': DEFAULT_PORT,
        'path': '/wd/hub',
        browser: '',
        desiredCapabilities: {
            'appPackage': data.packageName,
            'appActivity':'com.leapxpertapp.MainActivity',
            'deviceName': process.env.DEVICE || 'emulator-5554',
            'platformName': process.env.PLATFORM || 'android',
            'platformVersion': process.env.OS_VERSION || '10.0',
            'automationName': process.env.ENGINE || 'UIAutomator2',
            'newCommandTimeout': 300000,
            'androidDeviceReadyTimeout': 300000,
            'androidInstallTimeout': 90000,
            'appWaitDuration': 300000,
            'autoGrantPermissions': true,
            'gpsEnabled': true,
            'isHeadless': false,
            'noReset': false,
            'noSign': true,
        }
    },
}
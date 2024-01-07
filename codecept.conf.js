exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://web.qa.leapxpert.app',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: true,
      windowSize: 'maximize',
      smartWait: 10000,
      waitForTimeout: 15000,
      timeouts: {
        script: 60000,
        'page load': 15000
      }
    },
    Appium: {
      appiumV2: true,
      app: 'F:\\testXpert\\app_files\\qa-v20100017.apk',
      platform: 'android',
      device: 'emulator-5554',
      port: 4723,
      path: '/wd/hub',
      browser: '',
      desiredCapabilities: {
        appPackage: 'com.leapxpert.manager.qa',
        appActivity: 'com.leapxpertapp.MainActivity',
        deviceName: 'emulator-5554',
        platformName: 'android',
        platformVersion: '10.0',
        automationName: 'UIAutomator2',
        newCommandTimeout: 300000,
        androidDeviceReadyTimeout: 300000,
        androidInstallTimeout: 90000,
        appWaitDuration: 300000,
        autoGrantPermissions: true,
        gpsEnabled: true,
        isHeadless: false,
        noReset: false,
        noSign: true
      }
    }
  },
  include: {
    I: './steps_file.js',
    webPage: './pages/WebPage.js',
    mobilePage: './pages/MobilePage.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
      enabled: true
    },
    cucumberJsonReporter: {
      require: 'codeceptjs-cucumber-json-reporter',
      enabled: true,               // if false, pass --plugins cucumberJsonReporter
      attachScreenshots: true,     // true by default
      attachComments: true,        // true by default
      outputFile: 'cucumber_output.json',     // cucumber_output.json by default
      uniqueFileNames: false,      // if true outputFile is ignored in favor of unique file names in the format of `cucumber_output_<UUID>.json`.  Useful for parallel test execution
      includeExampleValues: false,  // if true incorporate actual values from Examples table along with variable placeholder when writing steps to the report
      timeMultiplier: 1000000    // Used when calculating duration of individual BDD steps.  Defaults to nanoseconds
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'testXpert'
}
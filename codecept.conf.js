
require('import-export');

const {caps} = require("./mobile-capabilities");

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://web.qa.leapxpert.app',
      browser: 'chrome',
      host: "127.0.0.1",
      port: 4444,
      restart: false,
      windowSize: 'maximize',
      smartWait: 5000,
      waitForTimeout: 10000,
      restart: true,
      timeouts: {
        "script": 60000,
        "page load": 10000
      }
    },
    Appium: caps.androidCaps
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
    }
  },
  name: 'testXpert'
}
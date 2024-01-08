1. Setup

-   Android Studio
-   install appium
-   install automatorUI2
-   Copy the actor.js contents from the https://gist.github.com/reubenmiller/c8f7f423171ebc295a7a65ebdefe4739 and replace the contents of node_modules/codeceptjs/lib/actor.js
-   Place your apk file to folder app_files

2. How to Run it

-   First start appium using command `npx appium --base-path=/wd/hub`
-   Run a android emulator device using Android 10
-   Run the script using command `npx codeceptjs run --plugins cucumberJsonReporter --grep "@test"`
-   For generating the Report: `node .\reporter.js`

3. Problem I Have encounter
    1. There are no official helper in codeceptjs to switch driver between Appium and Webdriver. So I did a hack from this issue to overcome: https://github.com/codeceptjs/CodeceptJS/issues/975 and using the switchHelper method
    2. When I using the touchActionPerform. I'm not really sure why the test will ignore the touchPerform method and run the Webdriver first(The step for checking the message) --> So I did comment it out --> Hopefully I can have a feedback on this since I really want to understand why

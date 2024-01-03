const { pause } = require('codeceptjs');
const data = require('./data');

const { I } = inject();
Feature('App Installation @android ');

Scenario('App is installed successfully', async ({ I }) => {
    //Web Testing
    I.amOnPage('https://web.qa.leapxpert.app');
    I.fillField({ css: 'input' }, 'auto');
    I.pressKey('Enter');
    I.fillField(
        { css: "input[data-testid='usernameLogin']" },
        'automation_auto_1316'
    );
    I.fillField(
        { css: "input[data-testid='passwordLogin']" },
        'Leaptesting@123'
    );
    I.pressKey('Enter');
    I.fillField({ css: "input[data-testid='otp-input-0']" }, '1');
    I.fillField({ css: "input[data-testid='otp-input-1']" }, '1');
    I.fillField({ css: "input[data-testid='otp-input-2']" }, '1');
    I.fillField({ css: "input[data-testid='otp-input-3']" }, '1');
    I.fillField({ css: "input[data-testid='otp-input-4']" }, '1');
    I.fillField({ css: "input[data-testid='otp-input-5']" }, '1');
    I.waitForElement(
        { css: "button[data-testid^='avatar'][class*='_clickable']" },
        30
    );
    I.click({ css: "button[data-testid^='avatar'][class*='_clickable']" });
    I.click({ css: "div[data-testid='btn-devices']" });
    I.click({ css: "button[data-testid='link-device']" });
    const Activation = await I.grabTextFrom({
        css: "div[class^='LinkDeviceModal_code-name']"
    });
    console.log(Activation);

    await I.runOnAndroid(async () => {
        await I.installApp('./app_files/qa-v20100017.apk');
        await I.seeAppIsInstalled(data.packageName);
        await I.waitForClickable('~skip');
        await I.click('~skip');
        await I.click('~Activation Code');
    });
});

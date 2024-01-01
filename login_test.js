const { pause } = require("codeceptjs");
const data = require("./data");

const { I } = inject();
Feature("App Installation @android ");

Scenario("App is installed successfully", async ({ I }) => {
  //Web Testing
  I.amOnPage("https://web.qa.leapxpert.app");
  I.fillField("input", "auto");
  await I.pressKey("Enter");
//     I.fillField("$usernameLogin","automation_auto_1316");
// I.fillField("$passwordLogin","Leaptesting@123");
// I.pressKey('Enter');
  // I.runInWeb(() => {
   
  // })
  await I.runOnAndroid(async () => {
    await I.installApp("./app_files/qa-v20100017.apk");
    await I.seeAppIsInstalled(data.packageName);
    await I.waitForClickable("~skip")
    await I.click("~skip");
    await I.click("~Activation Code");
  });
});

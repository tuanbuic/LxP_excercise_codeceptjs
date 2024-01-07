Feature('App Installation @android ');

Scenario('App is installed successfully', async ({ I,webPage,mobilePage }) => {
    //Web Testing
    I.switchHelper('WebDriver');
    webPage.open('https://web.qa.leapxpert.app');
    webPage.login('automation_auto_1316','Leaptesting@123','auto')
    const activationCode = await webPage.getActivationCode();
    webPage.closeLinkDeviceModal();
    webPage.logOut();
    I.switchHelper('Appium');
    mobilePage.inputActivationCode(activationCode);
    mobilePage.loginWithPassword('Leaptesting@123')
    // I.waitForElement(
    //     '//android.widget.EditText[@content-desc="login_password"]',
    //     10
    // );
    // I.fillField(
    //     '//android.widget.EditText[@content-desc="login_password"]',
    //     'Leaptesting@123'
    // );
    // I.click('//android.view.ViewGroup[@content-desc="login_signIn"]');
    // I.waitForElement('//android.widget.EditText[@content-desc="otp_0"]', 10);
    // I.fillField('//android.widget.EditText[@content-desc="otp_0"]', '111111');

    // I.waitForElement(
    //     '//android.view.ViewGroup[@content-desc="bottomTab_contact"]',
    //     30
    // );
    // I.click('//android.view.ViewGroup[@content-desc="bottomTab_contact"]');
    mobilePage.goToContactMenu();
    mobilePage.goToTeamTab();
    mobilePage.searchWithClientName('automation_auto_1317')
    // I.pressKey('Enter');
    mobilePage.chooseFirstRecordInSearchResult();
    // I.waitForElement(
    //     '//android.widget.TextView[@content-desc="Auto 1317 User 1317"]',
    //     15
    // );
    // I.click('//android.widget.TextView[@content-desc="Auto 1317 User 1317"]');
    mobilePage.goToUserChat();

    I.switchHelper('WebDriver');
    webPage.open('https://web.qa.leapxpert.app');
    webPage.login('automation_auto_1317','Leaptesting@123','auto')
    webPage.waitForPageCompleteLoaded();
    I.waitForElement({xpath:`(//div[starts-with(@data-testid, "ChatMessage")]/div/span[@data-testid="message-item"])[last()]`});
    I.seeTextEquals('This is a test message',{xpath:`(//div[starts-with(@data-testid, "ChatMessage")]/div/span[@data-testid="message-item"])[last()]`})
    I.seeTextEquals('Reply message',{xpath:`(//div[starts-with(@data-testid, "ChatMessage")]//div[contains(@class, "MessageReply")]//span[@data-testid="message-item"])[last()]`})
});

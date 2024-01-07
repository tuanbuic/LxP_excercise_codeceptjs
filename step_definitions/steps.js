const { I,webPage,mobilePage } = inject();
// Add in your custom step files

Given('User1 Logs in to the web', async () => {
  I.switchHelper('WebDriver');
  webPage.open('https://web.qa.leapxpert.app');
})

When('User1 request the QR code from the Web Application to allow logging in the Mobile App with {string} and {string} and {string} company name', async (username, password, companyName) => {
  webPage.login(username,password,companyName)
  global.activationCode = await webPage.getActivationCode();
  webPage.closeLinkDeviceModal();
  webPage.logOut();
})
When('User1 starts the mobile app then input QR code', async () => {
  I.switchHelper('Appium');
  mobilePage.inputActivationCode(global.activationCode);
})
When('User1 login to mobile App with {string} password', async (password) => {
  mobilePage.loginWithPassword(password)
})

When('User1 go to Contact tab and search for user 2 {string}', async (searchInput) => {
  mobilePage.goToContactMenu();
  mobilePage.goToTeamTab();
  mobilePage.searchWithClientName(searchInput)
  mobilePage.chooseFirstRecordInSearchResult();
})

When('User1 send message {string}', async (message) => {
  mobilePage.goToUserChat()
  mobilePage.sendMessage(message);

})

When('User1 reply {string} with {string}', async (targetMessage,replyMessage) => {
  mobilePage.replyToLatestMessageSent(targetMessage,replyMessage)
})

When('User2 login to the Web Application and received message and reply message', async () => {
  I.switchHelper('WebDriver');
  webPage.open('https://web.qa.leapxpert.app');
  webPage.login('automation_auto_1317','Leaptesting@123','auto')
  webPage.waitForPageCompleteLoaded();
  I.waitForElement({xpath:webPage.latestSendMessage});
  I.seeTextEquals('This is a test message',{xpath:webPage.latestSendMessage})
  I.seeTextEquals('Reply message',{xpath:webPage.latestReplyMessage})
})

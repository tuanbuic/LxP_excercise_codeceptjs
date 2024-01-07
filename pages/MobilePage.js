const { I } = inject();

class MobilePage {
    constructor() {
        this.skipButton = '//android.widget.TextView[@content-desc="Skip"]';
        this.activationCodeButton =
            '//android.widget.TextView[@content-desc="Activation Code"]';
        this.activationCodeInput =
            '//android.widget.EditText[@content-desc="activation_0"]';
        this.passwordInput ='//android.widget.EditText[@content-desc="login_password"]'
        this.signInButton =
            '//android.view.ViewGroup[@content-desc="login_signIn"]';
        this.OTPCode = '//android.widget.EditText[@content-desc="otp_0"]';
        this.contactTab =
            '//android.view.ViewGroup[@content-desc="bottomTab_contact"]';
        this.searchGuideButton =
            '//android.view.ViewGroup[@content-desc="guide.searchButton"]';
        this.teamTab = '//android.view.ViewGroup[@content-desc="tab_teams"]';
        this.searchInput =
            '//android.widget.EditText[@content-desc="contact_search"]';
        this.skipTutorialText =
            '//android.widget.TextView[@content-desc="Skip this tutorial"]';
        this.firstRecordInSearchResult =
            '//android.view.ViewGroup[@content-desc="teams_0_0"]';
        this.profileChatButton =
            '//android.view.ViewGroup[@content-desc="profile_chat"]';
        this.sendMessageBox =
            '//android.widget.TextView[@resource-id="send_to_room"]';
        this.messageInput =
            '//android.widget.EditText[@content-desc="chatDetail_input"]';
        this.sendMessageButton =
            '//android.view.ViewGroup[@content-desc="chatDetail_sendMessage"]';
        this.MessageContainer =
            '//android.widget.FrameLayout[@resource-id="android:id/content"]';
        this.getLatestMessageReplySelector = (message) => {
            return `(//android.view.ViewGroup[@content-desc="${message}"])[1]/android.view.ViewGroup/android.view.ViewGroup`;
        };
        this.replyOption = '//android.widget.TextView[@content-desc="Reply"]';

    }
    inputActivationCode(activationCode) {
        I.waitForElement(this.skipButton, 10);
        I.click(this.skipButton);
        I.waitForElement(this.activationCodeButton, 10);
        I.click(this.activationCodeButton);
        I.waitForElement(this.activationCodeInput,5);
        I.fillField(this.activationCodeInput, activationCode);
    }
    loginWithPassword(password) {
        I.waitForElement(this.passwordInput, 10);
        I.fillField(this.passwordInput, password);
        I.click(this.signInButton);
        this.inputOTP('111111');
    }
    inputOTP(code) {
        I.waitForElement(this.OTPCode, 10);
        I.fillField(this.OTPCode, code);
    }
    // insert your methods here
    goToContactMenu() {
        I.waitForElement(this.contactTab, 20);
        I.click(this.contactTab);
    }
    searchWithClientName(name) {
        I.fillField(this.searchInput, name);
        I.click(this.searchInput);
        I.pressKey('Enter');
    }
    goToTeamTab() {
        I.waitForElement(this.searchGuideButton, 5);
        I.click(this.searchGuideButton);
        I.waitForElement(this.skipTutorialText, 5);
        I.click(this.skipTutorialText);
        I.waitForElement(this.teamTab, 5);
        I.click(this.teamTab);
    }
    chooseFirstRecordInSearchResult() {
        I.waitForElement(this.firstRecordInSearchResult, 10);
        I.click(this.firstRecordInSearchResult);
    }
    goToUserChat() {
        I.waitForElement(this.profileChatButton, 5);
        I.click(this.profileChatButton);
    }
    sendMessage(message) {
        I.switchHelper('Appium');
        I.waitForElement(this.sendMessageBox, 10);
        I.click(this.sendMessageBox);
        I.fillField(this.messageInput, message);
        I.click(this.sendMessageButton);
    }
    async replyToLatestMessageSent(messageTargetForReply, messageReply) {
        I.switchHelper('Appium');
        I.click(this.MessageContainer);
        //wait  for the latest message have a fixed location after hide keyboard from screen
        I.wait(5);
        console.log(`getLatestMessageReplySelector:`,this.getLatestMessageReplySelector(messageTargetForReply))
        const value = await I.grabElementBoundingRect(
            this.getLatestMessageReplySelector(messageTargetForReply)
        );
        console.log(`value`, value);
        const sourceX = parseInt(value['x']) + parseInt(value['width']) / 2;
        const sourceY = parseInt(value['y']) + parseInt(value['height']) / 2;
        console.log({ sourceX, sourceY });

        I.touchPerform([
            {
                action: 'press',
                options: {
                    x: sourceX,
                    y: sourceY
                }
            },
            {
                action: 'wait',
                options: {
                    msecond: 5000
                }
            },
            { action: 'release' }
        ]);
        I.waitForElement(this.replyOption, 10);
        I.click(this.replyOption);
        this.sendMessage(messageReply);
    }
}

module.exports = new MobilePage();

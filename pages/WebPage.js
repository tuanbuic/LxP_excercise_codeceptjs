const { I } = inject();

class WebPage {
    constructor() {
        //insert your locators
        // this.button = '#button'
        this.companyInput = 'input';
        this.usernameInput = 'input[data-testid="usernameLogin"]';
        this.passWordInput = 'input[data-testid="passwordLogin"]';
        this.OTPInput = 'input[data-testid="otp-input-0"]';
        this.avatarProfileButton =
            'button[data-testid^="avatar"][class*="_clickable"]';
        this.deviceMenu = 'div[data-testid="btn-devices"]';
        this.linkDeviceButton = 'button[data-testid="link-device"]';
        this.activationCodeText = 'div[class^="LinkDeviceModal_code-name"]';
        this.closeActivationCodeModal =
            'div[class^="LinkDeviceModal"] g#ic-close';
        this.logOutButton = 'button[data-testid="item-0"]';
        this.confirmLogOutButton =
            'button[data-testid="btn-right"] > span[class*=MuiButton]';
        this.loadingIcon = 'div[data-testid="loading-wrapper"]';
        this.latestSendMessage =
            '(//div[starts-with(@data-testid, "ChatMessage")]/div/span[@data-testid="message-item"])[last()]';
        this.latestReplyMessage =
            '(//div[starts-with(@data-testid, "ChatMessage")]//div[contains(@class, "MessageReply")]//span[@data-testid="message-item"])[last()]';
    }
    // insert your methods here
    open(url) {
        I.switchHelper('WebDriver');
        I.amOnPage(url);
    }
    login(username, password, companyName) {
        I.fillField({ css: this.companyInput }, companyName);
        I.pressKey('Enter');
        I.fillField({ css: this.usernameInput }, username);
        I.fillField({ css: this.passWordInput }, password);
        I.pressKey('Enter');
        this.inputOTP('111111');
    }
    inputOTP(number) {
        I.fillField({ css: this.OTPInput }, number);
    }

    async getActivationCode() {
        this.goToProfile();
        this.goToDeviceMenu();
        this.goToLinkDevice();
        I.waitForElement({ css: this.activationCodeText }, 10);
        const activation = await I.grabTextFrom({
            css: this.activationCodeText
        });
        return activation;
    }
    goToProfile() {
        I.waitForElement({ css: this.avatarProfileButton }, 30);
        I.click({ css: this.avatarProfileButton });
    }
    goToDeviceMenu() {
        I.click({ css: this.deviceMenu });
    }
    goToLinkDevice() {
        I.click({ css: this.linkDeviceButton });
    }
    closeLinkDeviceModal() {
        I.click({ css: this.closeActivationCodeModal });
    }
    logOut() {
        I.waitForElement({ css: this.avatarProfileButton }, 30);
        I.moveCursorTo({ css: this.avatarProfileButton });
        I.waitForClickable({ css: this.logOutButton });
        I.click({ css: this.logOutButton });
        I.click({ css: this.confirmLogOutButton });
    }
    waitForPageCompleteLoaded() {
        I.waitForInvisible(this.loadingIcon, 10);
    }
}

module.exports = new WebPage();

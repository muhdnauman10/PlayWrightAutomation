const { expect } = require("@playwright/test");

export class CreateAccountPage {
  constructor(page) {
    this.page = page;
  }
  async navigateToWebsite() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

  async clickCreateAccount() {
    await this.page.getByRole("link", { name: "Create an Account" }).click();
  }
  async fillUserName(firstName, lastName) {
    await this.page.locator("xpath=//input[@id='firstname']").type(firstName);
    await this.page.locator("#lastname").fill(lastName);
  }

  async checkSubscribedCheckbox() {
    await this.page.locator("[name='is_subscribed']").click();
  }

  async fillEmail(email) {
    await this.page.locator("xpath=//input[@id='email_address']").fill(email);
  }

  async fillPassword(password) {
    await this.page.locator("xpath=//input[@id='password']").type(password);
  }

  async confirmPassword(password) {
    await this.page.locator("#password-confirmation").fill(password);
  }

  async clickCreateAccountButton() {
    await this.page.getByRole("button", { name: "Create an Account" }).click();
  }

  async clickSignIn() {
    await this.page.locator("text='Sign In' ").first().click();
  }
  async verifyEmailLabel() {
    const email_label = await this.page.locator("//label[@for='email']");
    await expect(email_label).toHaveText("Email");
  }
  async verifyPasswordLabel() {
    const pass_label = await this.page.locator("(//label[@for='pass'])[1]");
    await expect(pass_label).toHaveText("Password");
  }
  async verifywithInvalidCred() {
    const User_Email = this.page.locator("#email");
    const Paswrd = this.page.locator("//input[@title='Password']");
    const SignIN = this.page.locator("(//button[@id='send2'])[1]");
    await User_Email.type("jhon22223@gmail.com");
    await Paswrd.fill("tesasdat123#");
    await SignIN.click();
  }
  async textErrorMsg() {
    const error_msg = (
      await this.page.locator(".message-error.error.message").innerText()
    ).valueOf();
    console.log(error_msg);
  }
  async clickForgotPaswd() {
    //click on Forgot password link
    await this.page.locator(".action.remind").click();
  }
  async verifyForgotPaswdText() {
    //verify text
    await expect(this.page.locator(".base")).toHaveText(
      "Forgot Your Password?"
    );
  }

  async selectPaswdText() {
    //select text
    await this.page.locator(".base").selectText();
  }
}

const { When, Then, Given } = require("@cucumber/cucumber");
const { test, expect, locator, page } = require("@playwright/test");
const playwright = require("@playwright/test");

Given(
  "Navigate to magento website",
  { timeout: 100 * 1000 },
  async function () {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    // Write code here that turns the phrase above i
    page.goto("https://magento.softwaretestingboard.com/");
  }
);

When(
  "click on create new account & enter valid username and password",
  { timeout: 100 * 1000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.page.locator("text='Create an Account'").click();
    //await this.page.getByRole("link", { name: "Create an Account" }).click();
    //Fill user name field
    await this.page.locator("xpath=//input[@id='firstname']").type("John");
    await this.page.locator("#lastname").fill("Doe");
    //check the subscribed checkbox
    await this.page.locator("[name='is_subscribed']").click();
    //randomly generate the email id
    await this.page
      .locator("xpath=//input[@id='email_address']")
      .fill("john_" + getRndInteger(0, 101) + "@mailinator.com");
    //type password
    await this.page.locator("xpath=//input[@id='password']").type("Test123#");
    //re confirm password
    await this.page.locator("#password-confirmation").fill("Test123#");
  }
);

Then("account is created", async function () {
  // Write code here that turns the phrase above i
  await this.page.getByRole("button", { name: "Create an Account" }).click();
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

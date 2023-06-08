const { getRndInteger } = require("./helper_function");
const { expect } = require("@playwright/test");
export class ContactSubscription {
  constructor(page) {
    this.page = page;
  }
  async clickContactUs() {
    await this.page.locator("text='Contact Us'").click();
  }
  async enterPhone() {
    await this.page.locator("#telephone").fill("+9234152352");
  }
  async enterComment() {
    await this.page.locator("#comment").fill("This is a test comment");
  }
  async clickSubmitBtn() {
    await this.page.locator("//button[@title='Submit']").click();
  }
  async logintobevisible() {
    await expect(
      this.page.locator("(//span[@class='logged-in'])[1]")
    ).toBeVisible();
  }
  async logintohavetext() {
    await expect(
      this.page.locator("(//span[@class='logged-in'])[1]")
    ).toHaveText("Welcome, John Doe!");
  }
  async randomEmail() {
    await this.page
      .locator("#newsletter")
      .fill("john_" + getRndInteger(0, 101) + "@mailinator.com");
  }
  async clickSubscribeBtn() {
    await this.page.locator("//button[@title='Subscribe']").click();
  }
  async validateSubscribeMsg() {
    await expect(this.page.locator("(//div[@class='messages'])[1]")).toHaveText(
      "Thank you for your subscription."
    );
  }
}

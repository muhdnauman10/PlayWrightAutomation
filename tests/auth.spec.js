import { Page, expect, test } from "@playwright/test";

export class Login {
  constructor(page) {
    this.page = page;
  }
  async doLogin() {
    await this.page.goto("https://www.saucedemo.com/"); // this will hit this URL
    const username = this.page.locator("input#user-name"); // locator for the user name based on Id
    const password = this.page.locator("#password"); // locator for the password based on the id
    await username.type("standard_user");
    await password.fill("secret_sauce");
    const signin = this.page.locator("#login-button");
    await signin.click();
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/inventory.html"
    );
    console.log("Test passed ");
  }
}

test("Check that website exists", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

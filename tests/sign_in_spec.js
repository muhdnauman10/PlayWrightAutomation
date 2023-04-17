const { test, expect } = require("@playwright/test");

// create a class
export class Sign_in {
  constructor(page) {
    this.page = page;
  }
  async doSignin() {
    //go to
    await this.page.goto("https://magento.softwaretestingboard.com/");
    //await expect(this.page).toHaveScreenshot();

    //// click on Sign in link
    this.page.locator("text='Sign In' ").first().click();
    const user_email = this.page.locator("#email");
    const password = this.page.locator("//input[@title='Password']");
    const SignIN = this.page.locator("(//button[@id='send2'])[1]");
    await user_email.type("jhon23@gmail.com");
    await password.fill("test123#");
    await SignIN.click();
  }
}

export class Sign_out {
  constructor(page) {
    this.page = page;
  }

  async doSignout() {
    const menu_toggle = this.page.locator(
      "(//button[@class='action switch'])[1]"
    );

    await expect(menu_toggle).toBeVisible();
    await menu_toggle.click();
    //const logout = this.page.locator(
    //   "(//a[@href='https://magento.softwaretestingboard.com/customer/account/logout/'])[1]"
    // );

    const LogOut = this.page.locator("text= Sign Out ").first();
    await expect(LogOut).toBeVisible({ timeout: 10000 });
    await LogOut.waitFor();
    await LogOut.click();
  }
}

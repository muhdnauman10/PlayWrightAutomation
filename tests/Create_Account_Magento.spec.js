const { test, expect } = require("@playwright/test");
const { Sign_in, Sign_out } = require("./sign_in_spec");
const { getRndInteger } = require("../utils/support/helper_function");
const { CreateAccountPage } = require("../utils/support/Signup");

//********** LOGIN RELATED************** */

async function navigateToWebsite(page) {
  const createAccountPage = new CreateAccountPage(page);

  await createAccountPage.navigateToWebsite();
}

test("Create New Account", async ({ page }) => {
  const createAccountPage = new CreateAccountPage(page);
  await navigateToWebsite(page);
  // click on the create an account link
  await createAccountPage.clickCreateAccount();

  //Fill user name field
  await createAccountPage.fillUserName("John", "Doe");

  //check the subscribed checkbox
  await createAccountPage.checkSubscribedCheckbox();

  //randomly generate the email id
  const randomEmail = "john_" + getRndInteger(0, 101) + "@mailinator.com";
  await createAccountPage.fillEmail(randomEmail);

  //type password
  await createAccountPage.fillPassword("Test123#");

  //reconfirm password
  await createAccountPage.confirmPassword("Test123#");

  //click on create an account button
  await createAccountPage.clickCreateAccountButton();

  //After account creation , check for below text
  // Asserting that the first element with class 'box-title' has the text 'Contact Information'

  await expect(await page.locator(".box-title").first()).toHaveText(
    "Contact Information"
  );
});

test("Verify Email and password title", async ({ page }) => {
  const createAccountPage = new CreateAccountPage(page);
  await navigateToWebsite(page);
  // click on Sign in link
  await createAccountPage.clickSignIn();

  await createAccountPage.verifyEmailLabel();

  await createAccountPage.verifyPasswordLabel();
});

test("Verify Login with Invalid credentials", async ({ page }) => {
  const createAccountPage = new CreateAccountPage(page);
  await navigateToWebsite(page);
  // click on Sign in link
  await createAccountPage.clickSignIn();

  await createAccountPage.verifywithInvalidCred();

  await createAccountPage.textErrorMsg();
});

test.only("Verify Forgot password screen and navigate back", async ({
  page,
}) => {
  const createAccountPage = new CreateAccountPage(page);
  await navigateToWebsite(page);
  // click on Sign in link
  await createAccountPage.clickSignIn();
  await createAccountPage.clickForgotPaswd();
  //click on Forgot password link
  //await page.locator(".action.remind").click();
  //verify text
  await createAccountPage.verifyForgotPaswdText();
  //await expect(page.locator(".base")).toHaveText("Forgot Your Password?");

  await createAccountPage.selectPaswdText();
});

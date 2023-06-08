const { test, expect } = require("@playwright/test");
const {
  ContactSubscription,
} = require("../utils/support/contact&subscribe_POM");
const { Sign_in, Sign_out } = require("./sign_in_spec");
const { getRndInteger } = require("../utils/support/helper_function");

//********** Test Case#1 START************** */

test("Click Contact us and fill the form", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const contactsubscription = new ContactSubscription(page);
  //click on contact us link
  await contactsubscription.clickContactUs();
  //fill the name field
  //await page.locator("#name").type("John Doe");
  //enter email
  //await page.locator("#email").type("john23@gmail.com");
  //enter phone#
  await contactsubscription.enterPhone();
  //add a comment
  await contactsubscription.enterComment();
  //click submit button
  await contactsubscription.clickSubmitBtn();
  // //click signout
  await Signout.doSignout();
});

//********** Test Case#1 END************** */

//********** Test Case#2 START************** */
test.only("Subscribe email", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const contactsubscription = new ContactSubscription(page);
  //to check if signin is successful
  await contactsubscription.logintobevisible();
  await contactsubscription.logintohavetext();
  // Enter email in the email address field
  //randomly generate the email id
  await contactsubscription.randomEmail();
  //click on subscribe button
  await contactsubscription.clickSubscribeBtn();
  //await page.waitForSelector("(//div[@class='messages'])[1]'");
  //validate the subscribe email
  await contactsubscription.validateSubscribeMsg();
  // //click signout
  await Signout.doSignout();
});

//********** Test Case#2 END************** */

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




test("Gear tab >> Apply few filters and select an item", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();

  //mouse hover on Gear menu item
  await page.locator("#ui-id-6").hover();
  // click on fitness equipment option
  await page.locator("#ui-id-26").click();
  //click on Gender filter
  await page.locator("text='Gender'").click();
  await page.selectOption("text='Men'", "Men");
  //click on mens option
  //await page.locator("text='Men'").last().click();
  //click on Activity filter
  await page.locator("text='Activity'").click();
  //select Gym option
  await page.locator("text='Gym'").click();
  //select pushup grips product
  await page.locator("(//li[@class='item product product-item'])[6]").click();
  //click on add to cart button
  await page.locator("#product-addtocart-button").click();
  //select item text
  await page.locator(".base").selectText();
  //click on cart icon
  await page.locator(".action.showcart").click();
  //click on proceed to check out button
  await page.locator("#top-cart-btn-checkout").click();
  await page.waitForLoadState("networkidle");
  //click on next button
  await page.locator("//button[@data-role='opc-continue']").click();
  //click on place order button
  const locator = page.locator("//button[@title='Place Order']");
  await page.waitForSelector("//button[@title='Place Order']");
  await locator.waitFor();
  await locator.click();
  //click signout
  await Signout.doSignout();
});

test("Select a watch from Gear Menu", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();

  //mouse hover on Gear menu item
  await page.locator("#ui-id-6").hover();
  //click on watches option
  await page.locator("#ui-id-27").click();
  //hover on watch name = bolo sport watch
  //await page.locator("text=' Bolo Sport Watch '").hover();
  //click on add to cart button
  //await page.locator("xpath=//button[@title='Add to Cart']").nth(2).click();
  //click on watch
  await page.locator("(//li[@class='item product product-item'])[3]").click();
  //click on add to cart button
  await page.locator("#product-addtocart-button").click();
  //select success message text
  await page.locator(".message-success.success.message").selectText();

  //click on cart icon
  await page.locator(".action.showcart").click();
  //click on proceed to check out button
  await page.locator("#top-cart-btn-checkout").click();
  await page.waitForLoadState("networkidle");
  //click on next button
  await page.locator("//button[@data-role='opc-continue']").click();
  //click on place order button
  const locator = page.locator("//button[@title='Place Order']");
  await page.waitForSelector("//button[@title='Place Order']");
  await locator.waitFor();
  await locator.click();
  //click signout
  await Signout.doSignout();
});

test("Navigate to Sale tab-> MEN's Deals -> Pants", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  //click on sale tab from top menu
  await page.locator("text='Sale'").click();
  //click on Pants from left side links
  await page
    .locator(
      "//a[@href='https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html']"
    )
    .nth(1)
    .click();
  // select the text
  await page.locator("#page-title-heading").selectText();
  //mouse hover on Ist Pant Ist row
  await page.locator("#product-price-880").hover();
  //select pant size
  await page.locator("#option-label-size-143-item-177").nth(0).click();
  //select color
  await page.locator("#option-label-color-93-item-58").nth(0).click();
  //click add to cart button
  await page.locator("xpath=//button[@title='Add to Cart']").nth(0).click();
  //click on Material filter from left side
  await page.locator("(//div[@class='filter-options-title'])[5]").click();
  //select polyster option
  await page.locator("text=' Polyester '").click();
  //change to "List" style
  //await page.locator("#mode-list").first().click();
  //select the last product
  await page
    .locator("(//strong[@class='product name product-item-name'])[7]")
    .click();
  //select size
  await page.locator("#option-label-size-143-item-175").click();
  //select color
  await page.locator("#option-label-color-93-item-50").click();

  //click on add to cart button
  await page.locator("#product-addtocart-button").click();
  //select success message text
  await page.locator(".message-success.success.message").selectText();

  //click on cart icon
  await page.locator(".action.showcart").click();
  //click on proceed to check out button
  await page.locator("#top-cart-btn-checkout").click();
  await page.waitForLoadState("networkidle");
  //click on next button
  await page.locator("//button[@data-role='opc-continue']").click();
  //click on place order button
  const locator = page.locator("//button[@title='Place Order']");
  await page.waitForSelector("//button[@title='Place Order']");
  await locator.waitFor();
  await locator.click();
  //click signout
  await Signout.doSignout();
});

test("Search an item using search bar and change page size", async ({
  page,
}) => {
  //goto
  //await page.goto("https://magento.softwaretestingboard.com/");

  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();

  // type the input in search field
  await page.locator("#search").type("Gym Jacket");
  // click on search icon(the magnifying glass)
  await page.locator(".action.search").click();
  //hover on jacket price
  await page.locator("#product-price-334").hover();
  //select jacket size
  await page.locator("#option-label-size-143-item-170").nth(0).click();
  //select color
  await page.locator("#option-label-color-93-item-53").nth(0).click();
  //click add to cart button
  await page.locator("xpath=//button[@title='Add to Cart']").nth(0).click();
  //click on next page via pagination
  await page.locator("xpath=//a[@title='Next']").nth(1).click();
  await page.waitForLoadState("networkidle");
  //change page size
  await page.locator("#limiter").nth(1).selectOption("24");
  await Signout.doSignout();
});

test("Click on Advance search and fill all the criteria", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  //click on Advance search link
  await page.locator("text='Advanced Search'").last().click();
  //fill the price from field
  await page.locator("#price").fill("10");
  //fill the price to field
  await page.locator("#price_to").type("2000");
  //click on search field
  await page.locator("(//button[@title='Search'])[2]").click();
  //catching search
  const search_msg = (
    await page.locator("//div[@class='search found']").innerText()
  ).valueOf();
  console.log(search_msg);
});

test("Click on Training @smoke > Video Download Menu", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  await page.locator("#ui-id-7").hover();
  await page.locator("#ui-id-28").click();
  //select text
  await page.locator(".message.info.empty").selectText();
});

test("Click on Gear tab and sort by price and select an item ", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  await page.locator("#ui-id-6").hover();
  await page.locator("#ui-id-25").click();
  await page.waitForSelector("#sorter");
  await page.selectOption("#sorter", "price");
  //await page.locator("#sorter").first().click();
  //click on first item
  await page.locator("a.product-item-link").first().click();
  //select product title
  await page.locator("//span[@data-ui-id='page-title-wrapper']").selectText();
  //click add to cart button
  await page.locator("#product-addtocart-button").click();
  await page.locator("#tab-label-additional-title").click();

  //click on cart icon
  await page.locator("//a[@class='action showcart']").click();

  //click on proceed to check out button
  await page.locator("#top-cart-btn-checkout").click();
  await page.waitForLoadState("networkidle");
  //click on next button
  await page.locator("//button[@data-role='opc-continue']").click();
  //click on place order button
  const locator = page.locator("//button[@title='Place Order']");
  await page.waitForSelector("//button[@title='Place Order']");
  await locator.waitFor();
  await locator.click();
  //click signout
  await Signout.doSignout();
});

test("Go to “Sale” tab and select on Shorts under Men’s deal from left navigation hyperlink", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  //click on sale tab
  await page.locator("#ui-id-8").click();
  //click on shorts from left navigation under Mens deal

  await page
    .locator(
      "(//a[@href='https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html'])[2]"
    )
    .click();
  await page.locator("a.product-item-link").nth(0).hover();
  //select size
  await page.locator("#option-label-size-143-item-175").first().click();
  //select color
  await page.locator("#option-label-color-93-item-49").first().click();
  //click on the Add to cart button
  await page.locator("//button[@title='Add to Cart']").first().click();
  //click on cart icon
  await page.locator("//a[@class='action showcart']").click();
  //proceed to checkout
  await page.locator("#top-cart-btn-checkout").click();
  await page.waitForLoadState("networkidle");
  // //click on next button
  await page.locator("//button[@data-role='opc-continue']").click();
  // //click on place order button
  const locator = page.locator("//button[@title='Place Order']");
  await page.waitForSelector("//button[@title='Place Order']");
  await locator.waitFor();
  await locator.click();
  // //click signout
  await Signout.doSignout();
});

test("Click on Gear tab and sort by product and select an item , then sort by position and select item ", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  await page.locator("#ui-id-6").hover();
  //click on watches
  await page.locator("#ui-id-27").click();
  await page.waitForSelector("#sorter");
  await page.waitForLoadState("networkidle");
  await page.selectOption("#sorter", "Product Name");
  // change to List Mode from Grid
  await page.locator("#mode-list").first().click();
  //click on first item
  //await page.locator("a.product-item-link").first().click();
  //increase qty
  //await page.locator("#qty").fill("4");
  //click on the Add to cart button
  await page.locator("//button[@title='Add to Cart']").first().click();
  //Sort by Position
  await page.waitForSelector("#sorter");
  //await page.waitForLoadState("networkidle");
  await page.selectOption("#sorter", "Position");
  //add another item to add to cart
  await page.locator("(//button[@title='Add to Cart'])[2]").click();
  //click on cart icon
  await page.locator("//a[@class='action showcart']").click();
  //proceed to checkout
  await page.locator("#top-cart-btn-checkout").click();
  await page.waitForLoadState("networkidle");
  // //click on next button
  await page.locator("//button[@data-role='opc-continue']").click();
  // //click on place order button
  const locator = page.locator("//button[@title='Place Order']");
  await page.waitForSelector("//button[@title='Place Order']");
  await locator.waitFor();
  await locator.click();
  // //click signout
  await Signout.doSignout();
});




test("Click Contact us and fill the form", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  //click on contact us link
  await page.locator("text='Contact Us'").click();
  //fill the name field
  //await page.locator("#name").type("John Doe");
  //enter email
  //await page.locator("#email").type("john23@gmail.com");
  //enter phone#
  await page.locator("#telephone").fill("+9234152352");
  //add a comment
  await page.locator("#comment").fill("This is a test comment");
  //click submit button
  await page.locator("//button[@title='Submit']").click();
  // //click signout
  await Signout.doSignout();
});

test("Subscribe email", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  //to check if signin is successful
  await expect(page.locator("(//span[@class='logged-in'])[1]")).toBeVisible();
  await expect(page.locator("(//span[@class='logged-in'])[1]")).toHaveText(
    "Welcome, John Doe!"
  );

  // Enter email in the email address field
  //randomly generate the email id
  await page
    .locator("#newsletter")
    .fill("john_" + getRndInteger(0, 101) + "@mailinator.com");
  //click on subscribe button
  await page.locator("//button[@title='Subscribe']").click();
  //await page.waitForSelector("(//div[@class='messages'])[1]'");
  //validate the subscribe email
  await expect(page.locator("(//div[@class='messages'])[1]")).toHaveText(
    "Thank you for your subscription."
  );
  // //click signout
  await Signout.doSignout();
});

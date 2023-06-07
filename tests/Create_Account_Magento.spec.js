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

test("Select a bag from Gear Menu", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();

  //mouse hover on Gear menu item
  await page.locator("#ui-id-6").hover();
  // click on bags option
  await page.locator("#ui-id-25").click();
  //click on descending order
  await page.locator("(//a[@title='Set Descending Direction'])[1]").click();
  //click on bag
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
  //get order number
  const order_number = (
    await page.locator(".checkout-success").innerText()
  ).valueOf();
  console.log(order_number);
  //click signout
  await Signout.doSignout();
});

test("Select a fitness equipment from Gear Menu", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();

  //mouse hover on Gear menu item
  await page.locator("#ui-id-6").hover();
  // click on fitness equipment option
  await page.locator("#ui-id-26").click();
  //click on bottle
  await page.locator("(//li[@class='item product product-item'])[11]").click();
  //change the quantity
  await page.locator("#qty").fill("");
  await page.locator("#qty").type("5");
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





test("Select an item from Women's tab>>>Tees", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  //hover on women tab
  await page.locator("//a[@id='ui-id-4']").hover();
  //hower on tops
  await page.locator("#ui-id-9").hover();
  //click on Tees
  await page.locator("#ui-id-13").click();
  //click on price tab from left
  await page.locator("(//div[@class='filter-options-title'])[3]").click();
  //select price option
  const priceRangeOption = await page.locator("text=$30.00 - $39.99");
  await priceRangeOption.click();
  //change from grid to mode list
  await page.locator("#mode-list").first().click();
  //select ist item
  await page.locator("(//a[@class='product-item-link'])[1]").click();
  //select size
  await page.locator("#option-label-size-143-item-166").click();
  //select color
  await page.locator("#option-label-color-93-item-53").click();
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

test("Select an item from Women's tab>>>bra's and tanks", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  //hover on women tab
  await page.locator("//a[@id='ui-id-4']").hover();
  //hower on tops
  await page.locator("#ui-id-9").hover();
  //click on bras & tanks tab
  await page.locator("#ui-id-14").click();
  //sort by price
  await page.waitForSelector("#sorter");
  await page.selectOption("#sorter", "price");
  //click on 2nd product from ist row
  await page.locator("(//li[@class='item product product-item'])[2]").click();
  //select size
  await page.locator("#option-label-size-143-item-168").click();
  //select color
  await page.locator("#option-label-color-93-item-59").click();
  //remove qty and add a new qty
  await page.locator("#qty").fill("");
  await page.locator("#qty").type("3");
  //click on add to cart button
  await page.locator("#product-addtocart-button").click();
  //click on review tab
  await page.locator("#tab-label-reviews-title").click();
  //click on rating start
  await page.locator("#Rating_3_label").click({ force: true });
  //fill summary field
  await page.locator("#summary_field").fill("this is a summary field");
  //fill review field
  await page.locator("#review_field").type("product is good");
  //click submit review button
  await page.locator(".action.submit.primary").click();
  //get submit review success noty message
  const submit_msg = (
    await page.locator(".message-success.success.message").innerText()
  ).valueOf();
  console.log(submit_msg);
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

test("Select an item from Women's tab>>>bottoms>Pants", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  //hover on women tab
  await page.locator("//a[@id='ui-id-4']").hover();
  //hower on bottoms
  await page.locator("#ui-id-10").hover();
  //click on Pants tab
  await page.locator("#ui-id-15").click();
  //click on item
  await page.locator("(//li[@class='item product product-item'])[10]").click();
  //select size
  await page.locator("#option-label-size-143-item-171").click();
  //select color
  await page.locator("#option-label-color-93-item-50").click();
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

test("Select an item from Women's tab>>>bottoms>Shorts", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  //hover on women tab
  await page.locator("//a[@id='ui-id-4']").hover();
  //hower on bottoms
  await page.locator("#ui-id-10").hover();
  //click on Shorts tab
  await page.locator("#ui-id-16").click();
  //select an item
  await page.locator("(//li[@class='item product product-item'])[4]").click();
  //select size
  await page.locator("#option-label-size-143-item-172").click();
  //select color
  await page.locator("#option-label-color-93-item-52").click();
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

test("Womens Tab>> Add an item to cart and delete it ", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  //hover on women tab
  await page.locator("//a[@id='ui-id-4']").hover();
  //hower on tops
  await page.locator("#ui-id-9").hover();
  //click on hoodies & sweatshirts
  await page.locator("#ui-id-12").click();
  //click on ist row 2nd product
  await page.locator("(//div[@class='product-item-info'])[2]").click();
  //select size
  await page.locator("#option-label-size-143-item-167").click();
  //select color
  await page.locator("#option-label-color-93-item-56").click();
  //click on add to cart button
  await page.locator("#product-addtocart-button").click();
  //select item text
  await page.locator(".base").selectText();
  //click on cart icon
  await page.locator(".action.showcart").click();
  //delete item
  await page.locator(".action.delete").first().click();
  //click on ok from delete promt
  await page.locator("//button[@class='action-primary action-accept']").click();
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

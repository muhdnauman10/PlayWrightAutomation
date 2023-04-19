const { test, expect } = require("@playwright/test");
const { Sign_in, Sign_out } = require("./sign_in_spec");

test("Create New Account", async ({ page }) => {
  //navigate to the website
  page.goto("https://magento.softwaretestingboard.com/");
  // click on the create an account link
  await page.getByRole("link", { name: "Create an Account" }).click();
  //Fill user name field
  await page.locator("xpath=//input[@id='firstname']").type("John");
  await page.locator("#lastname").fill("Doe");
  //check the subscribed checkbox
  await page.locator("[name='is_subscribed']").click();
  //randomly generate the email id
  await page
    .locator("xpath=//input[@id='email_address']")
    .fill("john_" + getRndInteger(0, 101) + "@mailinator.com");
  //type password
  await page.locator("xpath=//input[@id='password']").type("Test123#");
  //re confirm password
  await page.locator("#password-confirmation").fill("Test123#");
  //click on create an account button
  await page.getByRole("button", { name: "Create an Account" }).click();
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

test("Mouse hover -> Menu bar -> Select Multiple jackets ", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();

  await page.locator("#ui-id-5").hover();
  await page.locator("#ui-id-17").hover();
  await page.locator("#ui-id-19").click();

  //click on ist jacket
  await page
    .locator("//div[@id='option-label-size-143-item-166']")
    .nth(0)
    .click();

  //select jacket color
  await page.locator("#option-label-color-93-item-49").nth(0).click();
  //click on the Add to cart button
  await page.locator("//button[@title='Add to Cart']").first().click();

  // click on 2nd row last jacket

  //await page.getByText("Orion Two-Tone Fitted Jacket").hover();
  await page.locator("#option-label-size-143-item-166").nth(7).click();
  await page.locator("#option-label-color-93-item-58").nth(3).click();
  // click on Add to Cart button
  await page.locator("//button[@title='Add to Cart']").nth(7).click();

  // Select 2nd jacket 2nd row
  // mouse hover on product
  await page.locator("a.product-item-link").nth(5).hover();
  //select jacket size
  await page.locator("#option-label-size-143-item-169").nth(5).click();
  //select jacket color
  await page.locator("#option-label-color-93-item-60").nth(0).click();
  //click on add to cart button
  await page.locator("//button[@title='Add to Cart']").nth(5).click();

  // click on 3rd row Ist product
  //await page.getByText("Kenobi Trail Jacket").nth(1).click();
  await page.locator("(//a[@class='product-item-link'])[9]").click();

  // print the value of title in terminal
  const product_title = await page.locator(".base").innerText().valueOf();

  // Print product name on terminal
  console.log(product_title);
  await expect(page.locator("//div[@title='Availability']")).toHaveText(
    "In stock"
  );

  //select the jacket size
  await page.locator("//div[@option-id='170']").click();
  //checking the text by using assertion

  //select the color
  await page.locator("#option-label-color-93-item-50").click();
  //add quantity
  await expect(page.locator("#qty")).toBeVisible();
  await page.locator("#qty").waitFor();
  await page.locator("#qty").fill("10");
  //await page.pause();
  //click add to cart button
  //await expect(page.locator("#product-addtocart-button")).toBeVisible();
  //await expect(page).toHaveURL(
  //"https://magento.softwaretestingboard.com/kenobi-trail-jacket.html"
  // );
  //await page.locator("//button[@type='submit']").waitFor();
  await page.locator("//button[@type='submit']").nth(1).click();

  //click on Reviews tab
  await page.locator("#tab-label-reviews-title").click();
  //give rating to product
  await page.locator("#Rating_1").click({ force: true });
  //await page.locator("#Rating_5_label").click();
  // add nickname in nickname field
  await page.locator("#nickname_field").waitFor();
  await page.locator("#nickname_field").type("John");
  // write summary in summary field
  await page.locator("#summary_field").waitFor();
  await page
    .locator("#summary_field")
    .fill("Purchase a product and giving review");
  //add the review about product
  await page.locator("#review_field").fill("this is a test review comment");
  //click on submit review button
  //await page.locator("//button[@type='submit']").nth(2).click();
  //await page.getByText("Submit Review").click();
  await page.locator(".action.submit.primary").click();
  //select jacket title text
  await page.locator("//span[@data-ui-id='page-title-wrapper']").selectText();
  //click on cart icon
  //await page.locator(".counter-number").waitFor();
  //await page.locator(".counter-number").click();
  await page.locator("(//span[@class='counter qty'])[1]").click();
  //click on proceed to checkout button
  await page.locator("#top-cart-btn-checkout").click();

  await page.waitForLoadState("networkidle");
  // add the street address
  await page
    .locator("//input[@name='street[0]']")
    .type("Demo Street#100 NewYork NJ");
  // add city
  //await page.locator("//input[@name='city']").fill("New Jersey");
  // Add province
  //await page.locator("//select[@name='region_id']").selectOption("Alaska");
  // Add Postal code
  //await page.locator("//input[@name='postcode']").fill("08873");
  // Add Country
  //await page.locator("//select[@name='country_id']").selectOption("Pakistan");
  // Add phone number
  //await page.locator("//input[@name='telephone']").type("+92354575100");
  // Check radio button
  await page.locator("input[value='flatrate_flatrate']").check();
  //click on next button
  await page.locator("//button[@data-role='opc-continue']").click();
  //click on place order button
  const locator = page.locator("//button[@title='Place Order']");
  await page.waitForSelector("//button[@title='Place Order']");
  //await expect(locator).toBeVisible();
  await locator.waitFor();
  await locator.click();
  //print the thankyou message in terminal
  /*const thankyou_msg = await page
    .locator("//span[@data-ui-id='page-title-wrapper']")
    .innerText()
    .valueOf();
  console.log(thankyou_msg);*/
  await page.locator("//span[@data-ui-id='page-title-wrapper']").selectText();
  //Signout
  await page.waitForLoadState("networkidle");
  await Signout.doSignout();
});

test("Select a watch from Gear Menu", async ({ page }) => {
  //goto
  await page.goto("https://magento.softwaretestingboard.com/");

  //mouse hover on Gear menu item
  await page.locator("#ui-id-6").hover();
  //click on watches option
  await page.locator("#ui-id-27").click();
  //hover on watch name = bolo sport watch
  await page.locator("text=' Bolo Sport Watch '").hover();
  //click on add to cart button
  await page.locator("xpath=//button[@title='Add to Cart']").nth(2).click();
});

test("Navigate to Sale tab-> MEN's Deals -> Pants", async ({ page }) => {
  //goto
  await page.goto("https://magento.softwaretestingboard.com/");
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
});

test("Search an item using search bar", async ({ page }) => {
  //goto
  await page.goto("https://magento.softwaretestingboard.com/");
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
});

test("Click on Training @smoke > Video Download Menu", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  await page.locator("#ui-id-7").hover();
  await page.locator("#ui-id-28").click();
  await page.locator(".message.info.empty").selectText();

  //const product_Text = await page
  //.locator(
  // ".cf-tweet-this cf-tt-target cf-tt-element-attached-bottom cf-tt-element-attached-center cf-tt-target-attached-top cf-tt-target-attached-center"
  // )
  //.selectText();
  //const product_Text = await page
  // .locator(
  //    ".cf-tweet-this cf-tt-target cf-tt-element-attached-bottom cf-tt-element-attached-center cf-tt-target-attached-top cf-tt-target-attached-center"
  //  )
  // .innerText()
  //   .valueOf();
  //console(product_Text);
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
  // await page.locator("//span[@class='counter qty'])[1]").click();
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

test("Change to 'List' Style from 'Grid' and Select an item from 2nd page Mens->Bottoms->Pants", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  // hover on Mens tab
  await page.locator("#ui-id-5").hover();
  //hover on Bottom
  await page.locator("#ui-id-18").hover();
  //click on Pants tab
  await page.locator("#ui-id-23").click();
  //change to List from Grid Style
  await page.locator("#mode-list").first().click();
  //click on 2nd page
  await page.locator("xpath=//a[@title='Next']").nth(1).click();
  //click on product title
  await page.locator(".product-item-link").nth(1).click();
  //select size
  await page.locator("#option-label-size-143-item-175").click();
  //select color
  await page.locator("#option-label-color-93-item-49").click();
  //click add to cart
  await page.locator(" //button[@title='Add to Cart']").click();
  //click on cart icon
  await page.locator("//a[@class='action showcart']").click();
  //click on proceed to checkout
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

test.only("Click on Gear tab and sort by product and select an item , then sort by position and select item ", async ({
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
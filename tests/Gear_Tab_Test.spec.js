const { test, expect } = require("@playwright/test");
const { Sign_in, Sign_out } = require("../tests/sign_in_spec");
const { GearTabPage } = require("../utils/support/Gear_Tab_POM");

//********** Test Case#1 START************** */
test("Select a bag from Gear Menu", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const geartabpage = new GearTabPage(page);

  //mouse hover on Gear menu item
  await geartabpage.hoveronGearTab();
  // click on bags option
  await geartabpage.clickonBag();
  //click on descending order
  await geartabpage.clickonDescending();
  //click on bag
  await geartabpage.clickonGItem();
  //click on add to cart button
  await geartabpage.clickAddToCart();
  //select item text
  await geartabpage.selectItemText();
  //click on cart icon
  await geartabpage.clickCartIcon();
  //click on proceed to check out button
  await geartabpage.clickProceedtoChcout();
  await geartabpage.waitLoadState();
  //click on next button
  await geartabpage.clickNextBtn();
  //click on place order button
  await geartabpage.clickPlaceOrder();
  //get order number
  await geartabpage.printOrderNum();
  //click signout
  await Signout.doSignout();
});
//********** Test Case#1 END************** */

//********** Test Case#2 START************** */

test("Select a fitness equipment from Gear Menu", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const geartabpage = new GearTabPage(page);

  //mouse hover on Gear menu item
  await geartabpage.hoveronGearTab();
  // click on fitness equipment option
  await geartabpage.clickFytEquipment();
  //click on bottle
  await geartabpage.clickGItem();
  //change the quantity
  await geartabpage.removeQty();
  await geartabpage.fillQty();
  //click on add to cart button
  await geartabpage.clickAddToCart();
  //select item text
  await geartabpage.selectItemText();
  //click on cart icon
  await geartabpage.clickCartIcon();
  //click on proceed to check out button
  await geartabpage.clickProceedtoChcout();
  await geartabpage.waitLoadState();
  //click on next button
  await geartabpage.clickNextBtn();
  //click on place order button
  await geartabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#2 END************** */

//********** Test Case#3 START************** */
test("Gear tab >> Apply few filters and select an item", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const geartabpage = new GearTabPage(page);

  //mouse hover on Gear menu item
  await geartabpage.hoveronGearTab();
  // click on fitness equipment option
  await geartabpage.clickFytEquipment();
  //click on Gender filter
  await geartabpage.clickFilter();
  await geartabpage.selectOption();
  //click on Activity filter
  await geartabpage.clickFilter1();
  //select Gym option
  await geartabpage.selectOption1();
  //select pushup grips product
  await geartabpage.clickonGItem();
  //click on add to cart button
  await geartabpage.clickAddToCart();
  //select item text
  await geartabpage.selectItemText();
  //click on cart icon
  await geartabpage.clickCartIcon();
  //click on proceed to check out button
  await geartabpage.clickProceedtoChcout();
  await geartabpage.waitLoadState();
  //click on next button
  await geartabpage.clickNextBtn();
  //click on place order button
  await geartabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#3 END************** */

//********** Test Case#4 START************** */
test("Select a watch from Gear Menu", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const geartabpage = new GearTabPage(page);

  //mouse hover on Gear menu item
  await geartabpage.hoveronGearTab();
  //click on watches option
  await geartabpage.clickonWatch();
  //hover on watch name = bolo sport watch
  //click on watch
  await geartabpage.clickGItem1();
  //click on add to cart button
  await geartabpage.clickAddToCart();
  //select success message text
  await geartabpage.selectSuccessMsg();
  //click on cart icon
  await geartabpage.clickCartIcon();
  //click on proceed to check out button
  await geartabpage.clickProceedtoChcout();
  await geartabpage.waitLoadState();
  //click on next button
  await geartabpage.clickNextBtn();
  //click on place order button
  await geartabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#4 END************** */

//********** Test Case#5 START************** */
test("Click on Gear tab and sort by price and select an item ", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const geartabpage = new GearTabPage(page);
  await geartabpage.hoveronGearTab();
  await geartabpage.clickonBag();
  await geartabpage.waitForSorter();
  await geartabpage.sortbyPrice();
  //click on first item
  await geartabpage.clickGItem2();
  //select product title
  await geartabpage.selectProductTitle();
  //click add to cart button
  await geartabpage.clickAddToCart();
  await geartabpage.clickAdditionalTitle();
  //click on cart icon
  await geartabpage.clickCartIcon();
  //click on proceed to check out button
  await geartabpage.clickProceedtoChcout();
  await geartabpage.waitLoadState();
  //click on next button
  await geartabpage.clickNextBtn();
  //click on place order button
  await geartabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#5 END************** */

//********** Test Case#6 START************** */
test.only("Click on Gear tab and sort by product and select an item , then sort by position and select item ", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const geartabpage = new GearTabPage(page);
  await geartabpage.hoveronGearTab();
  //click on watches
  await geartabpage.clickonWatch();
  await geartabpage.waitForSorter();
  await geartabpage.waitLoadState();
  await geartabpage.sortbyProductName();
  // change to List Mode from Grid
  await geartabpage.listStyle();
  //click on first item
  //await page.locator("a.product-item-link").first().click();
  //increase qty
  //await page.locator("#qty").fill("4");
  //click on the Add to cart button
  await geartabpage.clickAddToCart1();
  //Sort by Position
  await geartabpage.waitForSorter();
  //await page.waitForLoadState("networkidle");
  await geartabpage.sortbyPosition();
  //add another item to add to cart
  await geartabpage.clickAddToCart2();
  //click on cart icon
  await geartabpage.clickCartIcon();
  //proceed to checkout
  await geartabpage.clickProceedtoChcout();
  await geartabpage.waitLoadState();
  //click on next button
  await geartabpage.clickNextBtn();
  //click on place order button
  await geartabpage.clickPlaceOrder();
  // //click signout
  await Signout.doSignout();
});

//********** Test Case#6 END************** */

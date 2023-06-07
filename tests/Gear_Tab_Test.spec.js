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
test.only("Select a watch from Gear Menu", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const geartabpage = new GearTabPage(page);

  //mouse hover on Gear menu item
  await geartabpage.hoveronGearTab();
  //click on watches option
  await geartabpage.clickonWatch();
  //hover on watch name = bolo sport watch
  //await page.locator("text=' Bolo Sport Watch '").hover();
  //click on add to cart button
  //await page.locator("xpath=//button[@title='Add to Cart']").nth(2).click();
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

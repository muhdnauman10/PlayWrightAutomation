const { test, expect } = require("@playwright/test");
const { Sign_in, Sign_out } = require("./sign_in_spec");
const { WomenTabPage } = require("../utils/support/Women's_Tab_POM");
//const { MenTabPage } = require("../utils/support/Men's_Tab_POM");

//********** Test Case#1 START************** */
test("Women tabs>Tops>Jackets,apply filter and select an item", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const womentabpage = new WomenTabPage(page);
  //hover on women tab
  await womentabpage.hoveronWomenTab();
  //hower on tops
  await womentabpage.hoveronWTop();
  //click on jackets
  await womentabpage.clickonWJacket();
  //click on style filter
  await womentabpage.clickStyleFilter();
  //click on jacket from filter option
  await womentabpage.clickonTextJacket();
  //select an item
  await womentabpage.clickWItem();
  //select jacket size
  await womentabpage.selectItemSize();
  //select color
  await womentabpage.selectItemClr();
  //increase qty
  await womentabpage.fillQty();
  //click add to cart button
  await womentabpage.addToCart();
  //click on cart icon
  await womentabpage.clickCartIcon();
  //proceed to checkout
  await womentabpage.clickProceedtoChcout();
  await womentabpage.waitLoadState();
  //click on next button
  await womentabpage.clickNextBtn();
  // //click on place order button
  await womentabpage.clickPlaceOrder();
  // //click signout
  await Signout.doSignout();
});

//********** Test Case#1 END************** */

//********** Test Case#2 START************** */

test("Select an item from Women's tab>>>Hoodies and Sweatshirts", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const womentabpage = new WomenTabPage(page);
  //hover on women tab
  await womentabpage.hoveronWomenTab();
  //hower on tops
  await womentabpage.hoveronWTop();
  //click on hoodies & sweatshirts
  await womentabpage.clickonWhoodies();
  //click on ist row 2nd product
  await womentabpage.clickWitem1();
  //select size
  await womentabpage.selectItemSize1();
  //select color
  await womentabpage.selectItemClr1();
  //click on add to cart button
  await womentabpage.addToCart();
  //select item text
  await womentabpage.selectItemText();
  //click on more information tab
  await womentabpage.clickMoreInfo();
  //click on cart icon
  //await page.locator(".action.showcart").click();
  await womentabpage.clickCartIcon();
  //click on proceed to check out button
  await womentabpage.clickProceedtoChcout();
  await womentabpage.waitLoadState();
  //click on next button
  await womentabpage.clickNextBtn();
  //click on place order button
  await womentabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#2 END************** */

//********** Test Case#3 START************** */
test("Select an item from Women's tab>>>Tees", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const womentabpage = new WomenTabPage(page);
  //hover on women tab
  await womentabpage.hoveronWomenTab();
  //hower on tops
  await womentabpage.hoveronWTop();
  //click on Tees
  await womentabpage.clickonWTees();
  //click on price tab from left
  await womentabpage.clickPriceFilter();
  //select price option
  await womentabpage.selectPriceOption();
  //change from grid to mode list
  await womentabpage.listStyle();
  //select ist item
  await womentabpage.clickWitem2();
  //select size
  await womentabpage.selectItemSize();
  //select color
  await womentabpage.selectItemClr2();
  //click on add to cart button
  await womentabpage.addToCart();
  //select item text
  await womentabpage.selectItemText();
  //click on more information tab
  await womentabpage.clickMoreInfo();
  //click on cart icon
  await womentabpage.clickCartIcon();
  //click on proceed to check out button
  await womentabpage.clickProceedtoChcout();
  await womentabpage.waitLoadState();
  //click on next button
  await womentabpage.clickNextBtn();
  //click on place order button
  await womentabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#3 END************** */

//********** Test Case#4 START************** */
test("Select an item from Women's tab>>>bra's and tanks", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const womentabpage = new WomenTabPage(page);
  //hover on women tab
  await womentabpage.hoveronWomenTab();
  //hower on tops
  await womentabpage.hoveronWTop();
  //click on bras & tanks tab
  await womentabpage.clickonWTanks();
  //sort by price
  await womentabpage.waitForSorter();
  await womentabpage.sortbyPrice();
  //click on 2nd product from ist row
  await womentabpage.clickWItem3();
  //select size
  await womentabpage.selectItemSize2();
  //select color
  await womentabpage.selectItemClr4();
  //remove qty and add a new qty
  await womentabpage.removeQty();
  await womentabpage.fillQty();
  //click on add to cart button
  await womentabpage.addToCart();
  //click on review tab
  await womentabpage.clickReviewTab();
  //click on rating start
  await womentabpage.productRating();
  //fill summary field
  await womentabpage.waitForSummary();
  await womentabpage.fillSummary();
  //fill review field
  await womentabpage.fillReview();
  //click submit review button
  await womentabpage.clickSubmitBtn();
  //get submit review success noty message
  await womentabpage.submitmsg();
  //select item text
  await womentabpage.selectItemText();
  //click on cart icon
  await womentabpage.clickCartIcon();
  //click on proceed to check out button
  await womentabpage.clickProceedtoChcout();
  await womentabpage.waitLoadState();
  //click expandable
  await womentabpage.clickExpandable();
  //click on next button
  await womentabpage.clickNextBtn();
  //click on place order button
  await womentabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#4 END************** */

//********** Test Case#5 START************** */
test("Select an item from Women's tab>>>bottoms>Pants", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const womentabpage = new WomenTabPage(page);
  //hover on women tab
  await womentabpage.hoveronWomenTab();
  //hower on bottoms
  await page.locator("#ui-id-10").hover();
  //click on Pants tab
  await womentabpage.clickWPants();
  //click on item
  await womentabpage.clickWItem4();
  //select size
  await womentabpage.selectItemSize3();
  //select color
  await womentabpage.selectItemClr();
  //click on add to cart button
  await womentabpage.addToCart();
  //select item text
  await womentabpage.selectItemText();
  //click on cart icon
  await womentabpage.clickCartIcon();
  //click on proceed to check out button
  await womentabpage.clickProceedtoChcout();
  await womentabpage.waitLoadState();
  //click on next button
  await womentabpage.clickNextBtn();
  //click on place order button
  await womentabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});
//********** Test Case#5 END************** */

//********** Test Case#6 START************** */
test("Select an item from Women's tab>>>bottoms>Shorts", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const womentabpage = new WomenTabPage(page);
  //hover on women tab
  await womentabpage.hoveronWomenTab();
  //hower on bottoms
  await womentabpage.hoveronWBottom();
  //click on Shorts tab
  await womentabpage.clickonWshort();
  //select an item
  await womentabpage.clickWItem5();
  //select size
  await womentabpage.selectItemSize4();
  //select color
  await womentabpage.selectItemClr5();
  //click on add to cart button
  await womentabpage.addToCart();
  //select item text
  await womentabpage.selectItemText();
  //click add to compare
  //await womentabpage.clickAddToCompare();
  //click on cart icon
  await womentabpage.clickCartIcon();
  //click on proceed to check out button
  await womentabpage.clickProceedtoChcout();
  await womentabpage.waitLoadState();
  //click on next button
  await womentabpage.clickNextBtn();
  //click on place order button
  await womentabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#6 END************** */

//********** Test Case#7 START************** */

test.only("Womens Tab>> Add an item to cart and delete it ", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const womentabpage = new WomenTabPage(page);
  //hover on women tab
  await womentabpage.hoveronWomenTab();
  //hower on tops
  await womentabpage.hoveronWTop();
  //click on hoodies & sweatshirts
  await womentabpage.clickonWhoodies();
  //click on ist row 2nd product
  await womentabpage.clickWitem1();
  //select size
  await womentabpage.selectItemSize1();
  //select color
  await womentabpage.selectItemClr1();
  //click on add to cart button
  await womentabpage.addToCart();
  //select item text
  await womentabpage.selectItemText();
  //click on cart icon
  await womentabpage.clickCartIcon();
  //delete item
  await womentabpage.deleteCart();
  //click on ok from delete promt
  await womentabpage.clickOK();
  // //click signout
  await Signout.doSignout();
});

//********** Test Case#7 END************** */

const { test, expect } = require("@playwright/test");
const { Sign_in, Sign_out } = require("./sign_in_spec");
const { MenTabPage } = require("../utils/support/Men's_Tab_POM");

//********** MEN'S TAB************** */
//********** Test Case#1 START************** */
test("Mouse hover -> Menu bar -> Select Multiple jackets ", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const mentabpage = new MenTabPage(page);

  await mentabpage.hoveronMen();
  await mentabpage.hoveronTop();
  await mentabpage.clickMenTab();
  //click on ist jacket
  await mentabpage.clickFirstJacket();
  //select jacket color
  await mentabpage.selectJacketClr();
  //click on the Add to cart button
  await mentabpage.clickAddToCart();
  // click on 2nd row last jacket
  await mentabpage.clickSecondJacket();
  await mentabpage.selectJacketClr2();
  // click on Add to Cart button
  await mentabpage.clickAddToCart2();
  // Select 2nd jacket 2nd row
  // mouse hover on product
  await mentabpage.hoveronJacket();
  //select jacket size
  await mentabpage.selectJacketSize();
  //select jacket color
  await mentabpage.selectJacketClr3();
  //click on add to cart button
  await mentabpage.clickAddToCart3();
  // click on 3rd row Ist product
  await mentabpage.selectProduct();
  // print the value of title in terminal
  await mentabpage.printProductTitle();
  // Print product name on terminal
  await mentabpage.verifyText();
  //select the jacket size
  await mentabpage.selectJacketSize2();
  //select the color
  await mentabpage.selectProductClr();
  //add quantity
  await mentabpage.qtyToBeVisible();
  await mentabpage.fillQuantity();
  await mentabpage.clickAddToCart4();
  //click on Reviews tab
  await mentabpage.clickReviewTab();
  //give rating to product
  await mentabpage.productRating();
  // add nickname in nickname field
  await mentabpage.waitForNickName();
  await mentabpage.typeNickName();
  // write summary in summary field
  await mentabpage.waitForSummary();
  await mentabpage.fillSummary();
  //add the review about product
  await mentabpage.fillReview();
  //click on submit review button
  await mentabpage.clickSubmitBtn();
  //select jacket title text
  await mentabpage.selectJacketText();
  //click on cart icon
  await mentabpage.clickCartIcon();
  //click on proceed to checkout button
  await mentabpage.clickProceedCheckOutBtn();
  await mentabpage.waitNetworkIdle();
  // add the street address
  //await mentabpage.inputStreetAdres();
  // Check radio button
  await mentabpage.chkRadioBtn();
  //click on next button
  await mentabpage.clickNextBtn();
  //click on place order button
  await mentabpage.clickPlaceOrder();
  //await mentabpage.selectSpanText();
  await mentabpage.clickContinueShopping();
  //Signout
  await mentabpage.waitNetworkIdle();
  await Signout.doSignout();
});

//********** Test Case#1 END************** */

//********** Test Case#2 START************** */

test("Select an item from MEN's >>> hoodies and jackets", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const mentabpage = new MenTabPage(page);
  //hover on Mens tab
  await mentabpage.hoveronMen();
  //hover on Tops tab
  await mentabpage.hoveronTop();
  //click on  Hoodies
  await mentabpage.clickOnHoodies();
  //change to List from Grid Style
  await mentabpage.listStyle();
  //select hoodie size
  await mentabpage.clickHoodieSize();
  //select color
  await mentabpage.selectHoodieClr();
  //click add to cart button
  await mentabpage.clickAddToCart5();
  //get success message
  await mentabpage.successMsg();
  //select success message text
  await mentabpage.selectSuccessText();
  //click on cart icon
  await mentabpage.clickCartIcon2();
  //click on proceed to check out button
  await mentabpage.clickProceedCheckOutBtn();
  await mentabpage.waitNetworkIdle();
  //click on next button
  await mentabpage.clickNextBtn();
  //click on place order button
  await mentabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#2 END************** */

//********** Test Case#3 START************** */

test("Select an item from Men's tab>>> Tees", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const mentabpage = new MenTabPage(page);
  //hover on Mens tab
  await mentabpage.hoveronMen();
  //hover on Tops tab
  await mentabpage.hoveronTop();
  //click on tees tab
  await mentabpage.clickOnTees();
  //click on ist product name
  await mentabpage.clickonProduct();
  //select tee size
  await mentabpage.selectTeeSize();
  //select color
  await mentabpage.selectTeeClr();
  //enter qty
  await mentabpage.fillQuantity();
  //click on add to cart button
  await mentabpage.clickAddToCart6();
  //select success message text
  await mentabpage.selectSuccessText();
  //click on cart icon
  await mentabpage.clickCartIcon2();
  //click on proceed to check out button
  await mentabpage.clickProceedCheckOutBtn();
  await mentabpage.waitNetworkIdle();
  //click on next button
  await mentabpage.clickNextBtn();
  //click on place order button
  await mentabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#3 END************** */

//********** Test Case#4 START************** */

test("Select an item from Men's tab>>>Tanks", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const mentabpage = new MenTabPage(page);
  //hover on Mens tab
  await mentabpage.hoveronMen();
  //hover on Tops tab
  await mentabpage.hoveronTop();
  //click on tank option
  await mentabpage.clickOnTanks();
  //click on ist row last item
  await mentabpage.clickonProductItem();
  //select size
  await mentabpage.selectTankSize();
  //select color
  await mentabpage.selectProductClr();
  //click on add to cart button
  await mentabpage.clickAddToCart6();
  //get product title
  await mentabpage.printProductTitle();
  //click on cart icon
  await mentabpage.clickCartIcon2();
  //click on proceed to check out button
  await mentabpage.clickProceedCheckOutBtn();
  await mentabpage.waitNetworkIdle();
  //click on next button
  await mentabpage.clickNextBtn();
  //click on place order button
  await mentabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#4 END************** */

//********** Test Case#5 START************** */

test("Select an item from Men's tab >>>Shorts", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const mentabpage = new MenTabPage(page);
  // hover on Mens tab
  await mentabpage.hoveronMen();
  //hover on Bottom
  await mentabpage.hoveronBottom();
  //click on shorts tab
  await mentabpage.clickonShorts();
  //sort by price
  await mentabpage.waitForSorter();
  await mentabpage.sortbyPrice();
  //click on 2nd row ist item
  await mentabpage.clickonProduct2();
  //select size
  await mentabpage.selectProductSize();
  //select color
  await mentabpage.selectProductClr2();
  //click on add to cart button
  await mentabpage.clickAddToCart6();
  //select item text
  await mentabpage.selectProductText();
  //click on cart icon
  await mentabpage.clickCartIcon2();
  //click on proceed to check out button
  await mentabpage.clickProceedCheckOutBtn();
  await mentabpage.waitNetworkIdle();
  //click on next button
  await mentabpage.clickNextBtn();
  //click on place order button
  await mentabpage.clickPlaceOrder();
  //get order number
  await mentabpage.printOrderNum();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#5 END************** */

//********** Test Case#6 START************** */

test("Add an item to wishlist and verify success message", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const mentabpage = new MenTabPage(page);
  // hover on Mens tab
  await mentabpage.hoveronMen();
  //hover on Bottom
  await mentabpage.hoveronBottom();
  //click on shorts tab
  await mentabpage.clickonShorts();
  //click on Ist row last item
  await mentabpage.clickonProductItem();
  //click on add to wish list
  await mentabpage.addtoWishList();
  //get success message
  await mentabpage.printsuccessmsg();
});

//********** Test Case#6 END************** */

//********** Test Case#7 START************** */
test("Change to 'List' Style from 'Grid' and Select an item from 2nd page Mens->Bottoms->Pants", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const mentabpage = new MenTabPage(page);
  // hover on Mens tab
  await mentabpage.hoveronMen();
  //hover on Bottom
  await mentabpage.hoveronBottom();
  //click on Pants tab
  await mentabpage.clickPantTab();
  //change to List from Grid Style
  await mentabpage.listStyle();
  //click on 2nd page
  await mentabpage.clickPagination();
  //await page.locator("xpath=//a[@title='Next']").nth(1).click();
  //click on product title
  await mentabpage.clickProductTitle();
  //select size
  await mentabpage.selectProductSize2();
  //select color
  await mentabpage.selectProductClr3();
  //click add to cart
  //await page.locator(" //button[@title='Add to Cart']").click();
  await mentabpage.clickAddToCart6();
  //click on cart icon
  await mentabpage.clickCartIcon2();
  //select product detail text
  await mentabpage.detailProductText();
  //click on proceed to checkout
  await mentabpage.clickProceedCheckOutBtn();
  await mentabpage.waitNetworkIdle();
  //click on next button
  await mentabpage.clickNextBtn();
  //click on place order button
  await mentabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#7 END************** */

//********** Test Case#8 START************** */

test("Mens>>Add an item to cart and delete it", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const mentabpage = new MenTabPage(page);
  await mentabpage.hoveronMen();
  await mentabpage.hoveronTop();
  await mentabpage.clickMenTab();
  //click on ist jacket
  await mentabpage.clickFirstJacket();
  //select jacket color
  await mentabpage.selectJacketClr();
  //click on the Add to cart button
  await mentabpage.clickAddToCart();
  //click on cart icon
  await mentabpage.clickCartIcon2();
  //delete item
  await mentabpage.deleteCart();
  //click on ok from delete promt
  await mentabpage.clickOK();
  // //click signout
  await Signout.doSignout();
});

//********** Test Case#8 END************** */

//********** Test Case#9 START************** */

test.only("If item price is less than 70$ increase the qty to 4", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const mentabpage = new MenTabPage(page);
  //hover on Mens tab
  await mentabpage.hoveronMen();
  //hover on Tops
  await mentabpage.hoveronTop();
  //click on hoodies & jackets
  await mentabpage.clickOnHoodies();
  //click on jacket less than $70
  await mentabpage.clickonJacket();
  // retrives text content
  await mentabpage.priceTextContent();
  // converting string to floating
  //parseFloat and replace both are built-in javascript methods
  await mentabpage.parseFloat();
  // //click signout
  await Signout.doSignout();
  // }
});

//********** Test Case#9 END************** */

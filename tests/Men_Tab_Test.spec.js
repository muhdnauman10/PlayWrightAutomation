const { test, expect } = require("@playwright/test");
const { Sign_in, Sign_out } = require("./sign_in_spec");
const { MenTabPage } = require("../utils/support/Men's_Tab");

//********** MEN'S TAB************** */
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
  await mentabpage.selectJacketClr4();

  //add quantity
  await mentabpage.qtyToBeVisible();

  //await page.locator("#qty").waitFor();
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
  await mentabpage.inputStreetAdres();

  // Check radio button
  await mentabpage.chkRadioBtn();
  //click on next button
  await mentabpage.clickNextBtn();
  //click on place order button
  await mentabpage.clickPlaceOrder();
  await mentabpage.selectSpanText();
  //Signout
  await mentabpage.waitNetworkIdle();
  await Signout.doSignout();
});
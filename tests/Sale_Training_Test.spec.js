const { test, expect } = require("@playwright/test");
const { Sign_in, Sign_out } = require("./sign_in_spec");
const { Sale } = require("../utils/support/Sale_Tab_POM");

//********** Test Case#1 START************** */
test("Go to “Sale” tab and select on Shorts under Men’s deal from left navigation hyperlink", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const saletabpage = new Sale(page);
  //click on sale tab
  await saletabpage.clickSaleTab();
  //click on shorts from left navigation under Mens deal
  await saletabpage.clickShortsOption();
  await saletabpage.hoveronProduct();
  //select size
  await saletabpage.selectSize();
  //select color
  await saletabpage.selectClr();
  //click on the Add to cart button
  await saletabpage.clickAddtoCart();
  //click on cart icon
  await saletabpage.clickCartIcon();
  //proceed to checkout
  await saletabpage.clickCheckOutBtn();
  await saletabpage.waitNetworkIdle();
  // //click on next button
  await saletabpage.clickNxtBtn();
  // //click on place order button
  await saletabpage.clickPlaceOrder();
  // //click signout
  await Signout.doSignout();
});
//********** Test Case#1 END************** */

//********** Test Case#2 START************** */
test("Navigate to Sale tab-> MEN's Deals -> Pants", async ({ page }) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const saletabpage = new Sale(page);
  //click on sale tab from top menu
  await saletabpage.clickSaleTab();
  //click on Pants from left side links
  await saletabpage.clickPantOption();
  // select the text
  await saletabpage.selectText();
  //mouse hover on Ist Pant Ist row
  await saletabpage.hoveronProduct1();
  //select pant size
  await saletabpage.selectSize1();
  //select color
  await saletabpage.selectClr1();
  //click add to cart button
  await saletabpage.clickAddtoCart1();
  //click on Material filter from left side
  await saletabpage.clickMaterialOption();
  //select polyster option
  await saletabpage.selectPolyester();
  //change to "List" style
  //await page.locator("#mode-list").first().click();
  //select the last product
  await saletabpage.selectProduct1();
  //select size
  await saletabpage.selectSize2();
  //select color
  await saletabpage.selectClr2();
  //click on add to cart button
  await saletabpage.clickAddtoCart2();
  //select success message text
  await saletabpage.selectSuccessMsg();
  //click on cart icon
  //await page.locator(".action.showcart").click();
  await saletabpage.clickCartIcon();
  //click on proceed to check out button
  await saletabpage.clickCheckOutBtn();
  await saletabpage.waitNetworkIdle();
  //click on next button
  await saletabpage.clickNxtBtn();
  //click on place order button
  await saletabpage.clickPlaceOrder();
  //click signout
  await Signout.doSignout();
});

//********** Test Case#2 END************** */

//********** Test Case#3 START************** */

test.only("Click on Training @smoke > Video Download Menu", async ({
  page,
}) => {
  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const saletabpage = new Sale(page);

  await saletabpage.hoveronTrainingTab();
  await saletabpage.clickVideoDwnld();
  //select text
  await saletabpage.selectNotyMsg();
  await saletabpage.goToWishList();
});

//********** Test Case#3 END************** */

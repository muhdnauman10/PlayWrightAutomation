const { test, expect } = require("@playwright/test");
const { Sign_in, Sign_out } = require("./sign_in_spec");
const { Sale } = require("../utils/support/Sale_Tab_POM");

test.only("Go to “Sale” tab and select on Shorts under Men’s deal from left navigation hyperlink", async ({
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

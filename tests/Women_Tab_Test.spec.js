const { test, expect } = require("@playwright/test");
const { Sign_in, Sign_out } = require("./sign_in_spec");
const { WomenTabPage } = require("../utils/support/Women's_Tab_POM");
const { MenTabPage } = require("../utils/support/Men's_Tab_POM");

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

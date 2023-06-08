const { test, expect } = require("@playwright/test");
const { Sign_in, Sign_out } = require("../tests/sign_in_spec");
const { Search } = require("../utils/support/Search_POM");

test("Search an item using search bar and change page size", async ({
  page,
}) => {
  //goto
  //await page.goto("https://magento.softwaretestingboard.com/");

  const Signin = new Sign_in(page);
  const Signout = new Sign_out(page);
  await Signin.doSignin();
  const search = new Search(page);
  // type the input in search field
  await search.inputSearch();
  // click on search icon(the magnifying glass)
  await search.clickSearchIcon();
  //hover on jacket price
  await search.hoveronPrice();
  //select jacket size
  await search.selectSize();
  //select color
  await search.selectClr();
  //click add to cart button
  await search.clickAddtoCart();
  //click on next page via pagination
  await search.clickNextPage();
  await search.waitLoadState();
  //change page size
  await search.changePageSize();
  await Signout.doSignout();
});

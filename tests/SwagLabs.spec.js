const { test, expect, locator } = require("@playwright/test");
const { Login } = require("./auth.spec");

test("Login to checkout E2E", async ({ page }) => {
  const login = new Login(page);
  await login.doLogin();

  await page.locator("#add-to-cart-sauce-labs-backpack").click();
  await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
  await page.locator(".shopping_cart_link").click();
  await page.locator("button#checkout").click();

  await page.getByPlaceholder("First Name").type("Muhammad Nauman");
  await page.getByPlaceholder("Last Name").type("Muhammad Nauman");
  await page.locator("#postal-code").type("54000");
  await page.locator("[name='continue']").click();
  await expect(page.locator(".inventory_item_name").nth(0)).toHaveText(
    "Sauce Labs Backpack"
  );

  console.log(" Title is matched");
  await page.locator("[name='finish']").click();
  const title = await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!"
  );
  const titletext = (
    await page.locator(".complete-header").innerText()
  ).valueOf();

  console.log(titletext);
  await page.locator("[name='back-to-products']").click();
});

test("Add an item and remove it ", async ({ page }) => {
  const login = new Login(page);
  await login.doLogin();
  await page.locator("a#item_2_title_link").click();
  await page.locator("#add-to-cart-sauce-labs-onesie").click();
  await page.locator(".shopping_cart_link").click();
  await expect(page.locator("#item_2_title_link")).toHaveText(
    "Sauce Labs Onesie"
  );
  await page.locator("[data-test='remove-sauce-labs-onesie']").click();
  await page.locator("#react-burger-menu-btn").click();
  await page.locator("#logout_sidebar_link").click();
});

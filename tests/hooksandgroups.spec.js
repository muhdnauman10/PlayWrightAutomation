import { test, expect } from "@playwright/test";

test.describe("All My Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL("https://www.saucedemo.com/inventory.html");
    //   await page.close();
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test("home page", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page
      .getByRole("link", { name: "Sauce Labs Bolt T-Shirt" })
      .filter({ hasText: "Sauce Labs Bolt T-Shirt" })
      .click();
  });

  test("Logout", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.getByRole("link", { name: "Logout" }).click();
  });
});

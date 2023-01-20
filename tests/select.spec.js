import { test, expect } from "@playwright/test";

test("Selectors Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.pause();
  await page.click();
});

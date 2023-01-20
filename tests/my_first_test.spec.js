const { test, expect } = require("@playwright/test"); // require() is a build-in node js function used to load modules present in separte files.Here we are loading "test and expect" modules from playwright package.

test("My first test", async ({ page }) => {
  // async before a function makes the function return a promise
  await page.goto("https://google.com"); // await before a function makes the function wait for promise
  await expect(page).toHaveTitle("Google");
});

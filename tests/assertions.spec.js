import { page, expect, test } from "@playwright/test";

test("Assertion Demo", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  await page.pause();
  //ASSERTION
  //Check element present or not
  await expect(page.locator("text=The Kitchen")).toHaveCount(1);
  if (await page.$("text=The Kitchen")) {
    await page.locator("text=The Kitchen").click();
  }

  //check element visible or hidden

  await expect(page.locator("text=The Kitchen")).toBeVisible();
  //await expect.soft(page.locator("text=The Kitchen")).toBeHidden();
  //check element enabled or disabled

  await expect(page.locator("text=The Kitchen")).toBeEnabled();
  //await expect.soft(page.locator("text=The Kitchen")).toBeDisabled();

  //check text
  await expect(page.locator("text=The Kitchen")).toHaveText("The Kitchen");
  //await expect(page.locator("text=The Kitchen")).not.toHaveText("The Kitchen");
  // check attribute value
  await expect(page.locator("text=The Kitchen")).toHaveAttribute(
    "class",
    "chakra-heading css-dpmy2a"
  );
  await expect(page.locator("text=The Kitchen")).toHaveClass(/.*css-dpmy2a/);
  //visual validation with screenshot
  await expect(page).toHaveScreenshot();
});

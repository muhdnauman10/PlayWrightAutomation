const { test, expect } = require("@playwright/test");

test("Open the PEI site", async ({ page }) => {
  //await page.pause();
  // Open the PEI Site
  await page.goto(
    "https://stage.privateequityinternational.com/institution-profiles/kkr.html"
  );
  await expect(page).toHaveTitle("");
  await expect(page).toHaveURL(
    "https://stage.privateequityinternational.com/institution-profiles/kkr.html"
  );
  await expect(page).toHaveScreenshot(); //We are doing visual testing here of above Page

  //create a locator constant that finds an element
  const locator = page.locator(".OverViewComponent_link__DmnnA");
  //element is current visible on the current page
  await expect(locator).toBeVisible(); //Test case assertion
  // select the text
  await page.locator(".PageHeading_page-title__clH4q").selectText();

  // click on Contacts from left navigation and it should navigate to EQT Contact Information
  await page.locator("text='Contacts'").click();
  // click on Get access to EQT total AUM
  await page
    .getByRole("link", { name: "Get access to KKR total AUM >" })
    .click();
});

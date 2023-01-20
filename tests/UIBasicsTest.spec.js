const { test, expect } = require("@playwright/test");
const { reportSlowTests } = require("../playwright.config");

test("Browser context Playwright test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage(); //on this page u will hit url and start automation
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //css //xpath
  const username = page.locator("#username"); // store the css selector in a variable to optimize the code
  const signin = page.locator("#signInBtn"); // no await is used because we are just storing in the variable
  await username.type("rahulshetty"); // using just a variable name here
  await page.locator("#password").type("learning");
  await signin.click();
  const cardTitles = page.locator(".card-body a");
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  //type - fill both is a same

  await username.fill(""); // this will remove the existing value
  await username.fill("rahulshettyacademy");
  await signin.click();
  console.log(await cardTitles.first().textContent()); //first is used if we have multiple elements on single locator so it will pick ist element text
  console.log(await cardTitles.nth(1).textContent()); // nth will pick according to the sequence
  const allTitles = await cardTitles.allTextContents(); // alltextConents will come up with all the titles.
  console.log(allTitles);
});

test("UI control", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const username = page.locator("#username");
  const signin = page.locator("#signInBtn");
  const documentLink = page.locator("[href*='documents-request']");
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult"); // selectOption will select the value from the dropdown
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();

  //assertion
  await expect(page.locator(".radiotextsty").last()).toBeChecked(); // if this returns false our test will be failed.
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked(); //assertion
  await page.locator("#terms").uncheck(); // it will uncheck the checkbox
  await expect(documentLink).toHaveAttribute("class", "blinkingText");
  await page.pause(); // will pause the browser for sometime
});

test.only("Child window handle", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");
  const [newPage] = await Promise.all([
    // promise is in array so new page will be in array

    context.waitForEvent("page"),
    documentLink.click(),
  ]);
  const text = await newPage.locator(".red").textContent();
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  console.log(domain);
  await page.locator("#username").type(domain);
  await page.pause();
  console.log(await page.locator("#username").textContent());

  documentLink.click();
});

const { test, expect } = require("@playwright/test");

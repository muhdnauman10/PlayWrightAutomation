const { test } = require("@playwright/test");

test("Register New User", async ({ page }) => {
  //await page.pause();
  await page.goto("https://parabank.parasoft.com/"); // Navigate to the website
  await page.getByRole("link", { name: "Register" }).click(); // click on Register hyperlink
  await page.locator("//input[@id='customer.firstName']").fill("Muhammad"); //Xpath is used to locate element Enter in First Name field
  await page.locator("[name='customer.lastName']").type("Nauman"); //Enter in Last Name field
  await page
    .locator("xpath=//input[@id='customer.address.street']")
    .type("PAKISTAN"); // xpath is used and pakistan should entered in address

  await page.locator("[name='customer.address.city']").type("Islamabad");
  await page.locator("[name='customer.address.state']").type("Islamabad");
  await page
    .locator("xpath=//input[@name='customer.address.zipCode']")
    .fill("54000");
  await page.locator("[name='customer.phoneNumber']").type("090078601");
  await page.locator("xpath=//input[@name='customer.ssn']").fill("89999999012");
  await page.locator("[name='customer.username']").fill("muhd.nauman");
  await page.locator("[id='customer.password']").fill("Ciklum123#");
  await page
    .locator("xpath=//input[@id='repeatedPassword']")
    .type("Ciklum123#");
  await page.getByRole("button", { name: "Register" }).click();
});

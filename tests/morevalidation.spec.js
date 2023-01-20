const {test,expect}= require ('@playwright/test')

test("Popup validation", async({page})=>
{

await page.goto ("https://rahulshettyacademy.com/AutomationPractice/");
//await page.goto("https://www.google.com");
//await page.goBack();
//await page.goForward ();

await expect (page.locator ("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect (page.locator ("#displayed-text")).toBeHidden();
await page.pause();
page.on("dialog",dialog=>dialog.accept());
await page.locator("#confirmbtn").click();
await page.locator("#mousehover").hover(); // for mouse hover 
const framePage= page.frameLocator("#courses-iframe"); // for accessing the iframe we have to use frameLocator
await framePage.locator("li a[href*='lifetime-access']:visible").click(); // visible is used when we have two loctors and visible will only pick the visible one . ignore the hidden
const textCheck= await framePage.locator(".text h2").textContent();
console.log(textCheck.split(" ")[1]);


})


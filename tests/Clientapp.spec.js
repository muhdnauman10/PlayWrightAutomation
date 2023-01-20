const {test,expect}= require('@playwright/test');

test.only ('Browser context Playwright test',async ({page})=>
{
    
   
   await page.goto ("https://rahulshettyacademy.com/client")
//css //xpath
const username = page.locator('#userEmail'); // store the css selector in a variable to optimize the code
const password = page.locator('userPassword')
const login   = page.locator('#login'); // no await is used because we are just storing in the the variable
await username.type('rahulshettyacademy')  // using just a variable name here 
await password .type('learning')
await login.click();

/*const cardTitles= page.locator (".card-body a") ; 
console.log (await page.locator("[style*='block']").textContent());
await expect (page.locator("[style*='block']")).toContainText('Incorrect');

//type - fill both is a same

await username.fill (""); // this will remove the existing value 
await username.fill ("rahulshettyacademy");
await signin.click();
console.log (await cardTitles.first().textContent()); //first is used if we have multiple elements on single locator so it will pick ist element text
console.log (await cardTitles.nth(1).textContent()); // nth will pick according to the sequence
const allTitles = await cardTitles.allTextContents()); // alltextConents will come up with all the titles.
console.log(allTitles);

*/


}
);




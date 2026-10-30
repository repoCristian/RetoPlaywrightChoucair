import { Given,Before,After} from "@cucumber/cucumber";
import { chromium,Browser,Page } from "@playwright/test";


export let browser: Browser;
export let page: Page;


Before({timeout:30000}, async function () {
    browser = await chromium.launch({headless: true});
    const context = await browser.newContext();
    page = await context.newPage();
});


Given('ingreso a la aplicación ubicada en la URL {string}', async (url: string) => {
    await page.goto(url);
});

After(async function () {
    if (browser) {
        await browser.close();
    }    
});
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1366, height: 768 });
    await page.goto('https://duckduckgo.com/');

    await page.type('#search_form_input_homepage', 'twitch')
    await page.keyboard.press('ArrowDown', { delay: 200 });
    await page.keyboard.press('Enter',{ delay: 2000 });
    //await page.click("#Twitch")
    for (let i = 0; i < 12; i++) {
        await page.keyboard.press('Tab');
    }
    await page.keyboard.press('Enter',{ delay: 5000 });  // ACCES A TWITCH DEPUIS DUCKDUCKGO
    for (let i = 0; i < 7; i++) {
        await page.keyboard.press('Tab');
    }
    await page.keyboard.press('Enter'); // Accès à 'Parcourir'
    //await browser.close();
})();



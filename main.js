const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });
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
        await page.keyboard.press('Tab',{ delay: 10 });
    }
    await page.keyboard.press('Enter',{ delay: 5000 }); // Accès à 'Parcourir'

    for (let i = 0; i < 24; i++) {
        await page.keyboard.press('Tab',{ delay: 10 });
    }
    await page.keyboard.press('Enter',{ delay: 5000 }); // Accès à 'chaine Live'
    for (let i = 0; i < 3; i++) {
        await page.keyboard.press('Tab',{ delay: 10 });
    }
    await page.keyboard.press('Enter',{ delay: 5000 })
    for (let i = 0; i < 2; i++) {
        await page.keyboard.press('Tab',{ delay: 10 });
    }
    await page.keyboard.press('Enter',{ delay: 5000 }); // Accès à 'chaine Live triés par viewers croissants'
    //await browser.close();
})();



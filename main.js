const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    await page.goto('https://duckduckgo.com/');

    await page.type('#search_form_input_homepage', 'twitch')
    await page.keyboard.press('ArrowDown', {delay: 200});
    await page.keyboard.press('Enter', {delay: 2000});
    //await page.click("#Twitch")

    const twitch = await page.$x('//*[@id="sl-0"]/a'); // Access to twitch/directory from duckduckgo
    await twitch[0].click();

    await new Promise(r => setTimeout(r, 5000));// delay for load page
    const liveChannel = await page.$x('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div/ul/li[2]/a');
    await liveChannel[0].click(); // Acess to Chaine Live

    await new Promise(r => setTimeout(r, 2000));// delay for load page
    const sortBy = await page.$x('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div[3]/div[2]/div[2]/div[2]/div/div[1]/button');
    await sortBy[0].click();// Acces to the sort list
    await new Promise(r => setTimeout(r, 2000));// delay for load page

    const sortDecrease = await page.$x('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div[3]/div[2]/div[2]/div[2]/div/div[2]/div/div/div/div/div/div/div[2]/a');
    await sortDecrease[0].click();// Accès à 'chaine Live triés par viewers croissants'
    await new Promise(r => setTimeout(r, 2000));// delay for load page

    const textContent1 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(1) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)
    const textContent2 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(2) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)
    const textContent3 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(3) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)
    const textContent4 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(4) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)
    const textContent5 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(5) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)

    for (let i = 1; i <= 5 ; i++) {
        let toPrint = "textContent" + i.toString()
        console.log(eval(toPrint))
    }

    await browser.close();
})();



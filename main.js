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

    for (let i = 1; i <= 5; i++) {
        let path = "#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(" + i.toString() + ") > div > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3"
        const textContent = await page.evaluate(() => document.querySelector(path).innerText)
        console.log(textContent)

    }

    // const textContent = await page.evaluate(() =>  document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(i) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)
    //
    // const textContent2 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(2) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)
    // const textContent3 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(3) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)
    // const textContent4 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(4) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)
    // const textContent5 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(5) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)
    //const textContent6 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(2) > div > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText)




    // console.log(textContent)
    // console.log(textContent2)
    // console.log(textContent3)
    // console.log(textContent4)
    // console.log(textContent5)
   // console.log(textContent6)
    await browser.close();
})();



const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    await page.goto('https://duckduckgo.com/');

    await page.type('#search_form_input_homepage', 'twitch')
    await page.keyboard.press('ArrowDown', {delay: 200});
    await page.keyboard.press('Enter', {delay: 2000});

    const twitch = await page.$x('//*[@id="sl-0"]/a'); // Access to twitch/directory from duckduckgo
    await twitch[0].click();

    await new Promise(r => setTimeout(r, 2000));// delay for load page
    const liveChannel = await page.$x('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div/ul/li[2]/a');
    let clickChannel = liveChannel[0]; // Acess to Chaine Live

    if (clickChannel === undefined) {
        const liveChannel2 = await page.$x('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div[4]/div[1]/div/ul/li[2]/a');
        await liveChannel2[0].click(); // Acess to Chaine Live
        await new Promise(r => setTimeout(r, 2000));// delay for load page
        const sortBy = await page.$x('//*[@id="root"]/div/div[2]/div[2]/main/div[2]/div[3]/div/div/div/div/div[4]/div[2]/div[2]/div[2]/div/div[1]/button');
        await sortBy[0].click();// Acces to the sort list
        await new Promise(r => setTimeout(r, 100));// delay for load page

        let sortDecrease = await page.$x('//*[@id="root"]/div/div[2]/div[2]/main/div[2]/div[3]/div/div/div/div/div[4]/div[2]/div[2]/div[2]/div/div[2]/div/div/div/div/div/div/div[2]/a');
        await sortDecrease[0].click();// Accès à 'chaine Live triés par viewers croissants'

    } else {
        await clickChannel.click();
        await new Promise(r => setTimeout(r, 2000));// delay for load page
        const sortBy = await page.$x('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div[3]/div[2]/div[2]/div[2]/div/div[1]/button');
        await sortBy[0].click();// Acces to the sort list
        await new Promise(r => setTimeout(r, 100));// delay for load page

        let sortDecrease = await page.$x('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div[3]/div[2]/div[2]/div[2]/div/div[2]/div/div/div/div/div/div/div[2]/a');
        await sortDecrease[0].click();// Accès à 'chaine Live triés par viewers croissants'
    }
    await new Promise(r => setTimeout(r, 50));// delay for load page


    const streamer1 = "https://www.twitch.tv/" + await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(1) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__links > div:nth-child(1) > p > a").innerText);
    const streamer2 = "https://www.twitch.tv/" + await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(2) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__links > div:nth-child(1) > p > a").innerText);
    const streamer3 = "https://www.twitch.tv/" + await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(3) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__links > div:nth-child(1) > p > a").innerText);
    const streamer4 = "https://www.twitch.tv/" + await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(4) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__links > div:nth-child(1) > p > a").innerText);
    const streamer5 = "https://www.twitch.tv/" + await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(5) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__links > div:nth-child(1) > p > a").innerText);

    const title1 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(1) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText);
    const title2 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(2) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText);
    const title3 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(3) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText);
    const title4 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(4) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText);
    const title5 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(5) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__title > div > a > div > h3").innerText);

    const category1 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(1) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__links > div:nth-child(2) > p > a").innerText);
    const category2 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(2) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__links > div:nth-child(2) > p > a").innerText);
    const category3 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(3) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__links > div:nth-child(2) > p > a").innerText);
    const category4 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(4) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__links > div:nth-child(2) > p > a").innerText);
    const category5 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(5) > div > div > article > div.tw-item-order-2.tw-mg-t-1 > div > div.tw-flex-grow-1.tw-flex-shrink-1.tw-full-width.tw-item-order-2.tw-media-card-meta__text-container > div.tw-media-card-meta__links > div:nth-child(2) > p > a").innerText);

    const viewer1 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(1) > div > div > article > div.tw-item-order-1 > div > div.ScTransformWrapper-uo2e2v-1.coZOAa > a > div > div > div.tw-absolute.tw-full-height.tw-full-width.tw-left-0.tw-media-card-image__corners.tw-top-0 > div.tw-absolute.tw-bottom-0.tw-left-0.tw-mg-1 > div > p").innerText);
    const viewer2 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(2) > div > div > article > div.tw-item-order-1 > div > div.ScTransformWrapper-uo2e2v-1.coZOAa > a > div > div > div.tw-absolute.tw-full-height.tw-full-width.tw-left-0.tw-media-card-image__corners.tw-top-0 > div.tw-absolute.tw-bottom-0.tw-left-0.tw-mg-1 > div > p").innerText);
    const viewer3 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(3) > div > div > article > div.tw-item-order-1 > div > div.ScTransformWrapper-uo2e2v-1.coZOAa > a > div > div > div.tw-absolute.tw-full-height.tw-full-width.tw-left-0.tw-media-card-image__corners.tw-top-0 > div.tw-absolute.tw-bottom-0.tw-left-0.tw-mg-1 > div > p").innerText);
    const viewer4 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(4) > div > div > article > div.tw-item-order-1 > div > div.ScTransformWrapper-uo2e2v-1.coZOAa > a > div > div > div.tw-absolute.tw-full-height.tw-full-width.tw-left-0.tw-media-card-image__corners.tw-top-0 > div.tw-absolute.tw-bottom-0.tw-left-0.tw-mg-1 > div > p").innerText);
    const viewer5 = await page.evaluate(() => document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div.tw-flex.tw-flex-nowrap.tw-full-height.tw-overflow-hidden.tw-relative > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div.tw-pd-b-3.tw-pd-t-2 > div > div:nth-child(1) > div:nth-child(1) > div.ScTower-sc-1dei8tr-0.hRbnOC.tw-tower > div:nth-child(5) > div > div > article > div.tw-item-order-1 > div > div.ScTransformWrapper-uo2e2v-1.coZOAa > a > div > div > div.tw-absolute.tw-full-height.tw-full-width.tw-left-0.tw-media-card-image__corners.tw-top-0 > div.tw-absolute.tw-bottom-0.tw-left-0.tw-mg-1 > div > p").innerText);

    console.log("Top 5 streamer en direct Francais\n");


    let streamers = []

    for (let i = 1; i <= 5; i++) {
        let streamer = []
        streamer.push(eval("streamer" + i.toString()), eval("title" + i.toString()), eval("category" + i.toString()), eval("viewer" + i.toString()));
        streamers.push(streamer)
    }

    console.log(streamers);



    await browser.close();

   // return viewer1, viewer2, viewer3, viewer4, viewer5;
})();
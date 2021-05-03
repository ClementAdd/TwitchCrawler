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

    // await new Promise(r => setTimeout(r, 2000)); // delay for load page
    // const directory = await page.$x('//*[@id="root"]/div/div[2]/nav/div/div[1]/div[1]/div/div[1]/div[1]/a'); // Accès à 'Parcourir'
    // await directory[0].click(); // Accès à 'Parcourir'
    //

    // await new Promise(r => setTimeout(r, 5000));// delay for load page
    // const liveChannel = await page.$x('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div/ul/li[2]/a');
    // await liveChannel[0].click(); // Acess to Chaine Live
    //
    // await new Promise(r => setTimeout(r, 2000));// delay for load page
    // const sortBy = await page.$x('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div[3]/div[2]/div[2]/div[2]/div/div[1]/button');
    // await sortBy[0].click();// Acces to the sort list
    // await new Promise(r => setTimeout(r, 2000));// delay for load page
    //
    // const sortDecrease = await page.$x('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div[3]/div[2]/div[2]/div[2]/div/div[2]/div/div/div/div/div/div/div[2]/a');
    // await sortDecrease[0].click();// Accès à 'chaine Live triés par viewers croissants'
    // await new Promise(r => setTimeout(r, 2000));// delay for load page
    //
    // await browser.close();
})();



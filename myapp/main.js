const puppeteer = require('puppeteer');

async function getStats(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    await page.goto('https://www.twitch.tv/directory/all?sort=VIEWER_COUNT');
    await new Promise(r => setTimeout(r, 3000));

    const streamers = await page.$$eval("[data-target='directory-game__card_container']", (streams)=>{
        let streamers = [];
        streams.forEach((stream)=>{

            const nameAndCate = stream.querySelector(".tw-media-card-meta__links").innerText.split(/\n+/);

            streamers.push({
                link: 'https://twitch.tv/' + nameAndCate[0].toLowerCase(),
                title: stream.querySelector('.tw-media-card-meta__title').innerText,
                nameStreamer: nameAndCate[0],
                category:   nameAndCate[1],
                viewers: stream.querySelector('.tw-media-card-stat').innerText,
                miniature: stream.querySelector('.tw-c-text-overlay .tw-image').src,
                pdp: stream.querySelector('.tw-avatar .tw-image-avatar').src,
            });
        });
        console.log(streamers)
        return streamers;
    })

    //await browser.close();

    return streamers
}

module.exports = {getStats}
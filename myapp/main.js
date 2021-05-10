const puppeteer = require('puppeteer');

async function getStats() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    await page.goto('https://www.twitch.tv/directory/all?sort=VIEWER_COUNT');
    await new Promise(r => setTimeout(r, 1500));

    const streamers = await page.$$eval("[data-target='directory-game__card_container']", (streams) => {
        let streamers = [];
        streamers.push(new Date().getHours()+":"+ new Date().getMinutes()+":"+ new Date().getSeconds())
        streams.forEach((stream) => {

            const nameAndCate = stream.querySelector(".tw-media-card-meta__links").innerText.split(/\n+/);
            let name = nameAndCate[0]
            if (name.indexOf('(') !== -1) {
                name = name.split('(')
                name = name[1].split(')')
                name = name[0].replace(',', '')
            }
            name.replace(' ', '')
            streamers.push({
                    link: 'https://twitch.tv/' + name.replaceAll(' ', ''),
                    title: stream.querySelector('.tw-media-card-meta__title').innerText,
                    nameStreamer: name,
                    category: nameAndCate[1],
                    viewers: stream.querySelector('.tw-media-card-stat').innerText,
                    miniature: stream.querySelector('.tw-c-text-overlay .tw-image').src,
                    pdp: stream.querySelector('.tw-avatar .tw-image-avatar').src,
                }
            );
        });
        console.log(streamers)
        return streamers;
    })

    await browser.close();

    return streamers
}


module.exports = {getStats}
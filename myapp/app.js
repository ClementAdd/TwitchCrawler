(async () => {
    const express = require('express');
    const path = require('path');
    const app = express();
    const port = 8080;

    const main = require("./main")
    let streamers = await main.getStats();

    app.get('/', async function (req, res) {
        //streamers = await main.getStats();
        res.sendFile(path.join(__dirname, './public/index.html'));

    });
    app.get('/about-us', function (req, res) {
        res.sendFile(path.join(__dirname, './public/about-us.html'));
    });

    app.get('/streamers', function (req, res) {
        res.send(streamers);
    });

    app.get('/app.css', function (req, res) {
        res.sendFile(path.join(__dirname, '/public/style/main.css'));
    })


    app.use((req, res, next) => {
        res.status(404).sendFile(path.join(__dirname, './public/404NotFound.html'));
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });

})();

(async ()=>{
    const express = require('express');
    const path = require('path');
    const app = express();
    const port = 80;

    const main = require("./main")
    const streamers = await main.getStats();

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });

    app.get('/streamers', function(req, res) {
        res.send(streamers);
    });

    app.get('/getStats', async function(req, res) {
        await main.getStats();
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
})();

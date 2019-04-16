// lib/indexex.ts
import express = require('express');

// Create a new express application instance
const index: express.Application = express();

index.get('/', function (req, res) {
    res.send('Hello World!');
});

index.listen(3500, function () {
    console.log('Museo index listening on port 3500!');
});
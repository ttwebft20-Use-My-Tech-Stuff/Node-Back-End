require('dotenv').config();

const path = require('path');
const express = require('express');

const server = require('./api/server.js');

// eslint-disable-next-line no-undef
const port = process.env.PORT;

// eslint-disable-next-line no-undef
server.use(express.static(path.join(__dirname, 'client/dist')));

server.get('*', (req, res) => {
    // if you want to serve a SPA using Express you totally can!
    // eslint-disable-next-line no-undef
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(8000);

server.listen(port, () => {
    console.log('Listening  on: ' + port );
});
//how to run the server
/* 

npm install express
node server.js

*/

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const COUNTER_FILE = path.join(__dirname, 'counter.txt');

app.use(express.static(__dirname));

// Get current count
app.get('/api/count', (req, res) => {
    fs.readFile(COUNTER_FILE, 'utf8', (err, data) => {
        if (err) return res.json({ count: 0 });
        res.json({ count: parseInt(data, 10) || 0 });
    });
});

// Increment count
app.post('/api/increment', (req, res) => {
    fs.readFile(COUNTER_FILE, 'utf8', (err, data) => {
        let count = parseInt(data, 10) || 0;
        count++;
        fs.writeFile(COUNTER_FILE, count.toString(), () => {
            res.json({ count });
        });
    });
});

app.listen(3230, () => console.log('Server running on http://localhost:3230'));


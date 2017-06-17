var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//TODO Database connection

// Setup server
var app = express();

app.use(bodyParser.json());
var server = require('http').createServer(app);
require('./routes')(app);

mongoose.connect('mongodb://localhost/whitely-app');


// Start server
server.listen(3000, '127.0.0.1', function () {
    console.log('Server listening on port 3000..');
});

var noti = false;

app.post('/api/noti', (req, res) => {
    noti = true;
});


app.get('/api/noti', (req, res) => {
    if (noti) {
        res.json({
            noti: true
        });
        noti = false;
    } else {
        res.json({
            noti: false
        });
    }
});

// Expose app
module.exports = {
    app: app,
};

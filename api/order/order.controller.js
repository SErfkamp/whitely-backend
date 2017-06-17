'use strict';

var Order = require('./order.model');
var apn = require('apn');

function handleError(res, err) {
    return res.send(500, err);
}

exports.index = function (req, res) {
    Order.find(req.query).lean().exec(function (err, orders) {
        if (err) {
            return handleError(res, err);
        }

        console.log('Show all orders');

        return res.status(200).json(orders);
    });
};

exports.show = function (req, res) {
    Order.findById(req.params.id).lean().exec(function (err, order) {
        if (err) {
            return handleError(res, err);
        }

        if (!order) {
            return res.send(404);
        }

        console.log('Show one order');

        return res.json(order);
    });
};

exports.create = function (req, res) {
    Order.create(req.body, function (err, newOrder) {
        if (err) {
            return handleError(res, err);
        }

        console.log('Order received..');

        return res.json(newOrder);
    });
};

/*var options = {
    token: {
        key: "path/to/APNsAuthKey_XXXXXXXXXX.p8",
        keyId: "key-id",
        teamId: "developer-team-id"
    },
    production: false
};

var apnProvider = new apn.Provider(options);*/

exports.update = function (req, res) {
    Order.findByIdAndUpdate(req.body.id, req.body, function (err, newOrder) {
        if (err) {
            return handleError(res, err);
        }

        /*var note = new apn.Notification();

        note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
        note.badge = 3;
        note.sound = "ping.aiff";
        note.alert = "\uD83D\uDCE7 \u2709 ALERT: You have a new message";
        note.payload = { 'messageFrom': 'MessageFrom' };
        note.topic = "Topic";

        apnProvider.send(note, deviceToken).then((result) => {
            // see documentation for an explanation of result
        });*/

        return res.json(newOrder);
    });
};
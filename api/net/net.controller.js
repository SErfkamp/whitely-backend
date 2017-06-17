'use strict';

var Net = require('./net.model');

function handleError(res, err) {
    return res.send(500, err);
}

exports.index = function (req, res) {
    Net.find(req.query).lean().exec(function (err, nets) {
        if (err) {
            return handleError(res, err);
        }

        return res.status(200).json(nets);
    });
};

exports.show = function (req, res) {
    Net.findById(req.params.id).lean().exec(function (err, net) {
        if (err) {
            return handleError(res, err);
        }

        if (!net) {
            return res.send(404);
        }

        return res.json(net);
    });
};

exports.create = function (req, res) {
    Net.create(req.body, function (err, newNet) {
        if (err) {
            return handleError(res, err);
        }

        return res.json(newNet);
    });
};

var express = require('express');
var router = express.Router();
var Pessoa = require('./model');

router.get('/', function(req, res, next) {
    Pessoa.find().exec(function(err, pessoas) {
        if (err) {
            return next(err);
        }

        res.json(pessoas);
    });
});

module.exports = router;
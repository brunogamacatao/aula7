var express = require('express');
var router = express.Router();
var Pessoa = require('./model');

router.get('/', function(req, res) {
    Pessoa.find().exec(function(err, pessoas) {
        res.json(pessoas);
    });
});

router.get('/:id', function(req, res) {
    Pessoa.findById(req.params.id).exec(function(err, pessoa) {
        res.json(pessoa);
    });
});

router.delete('/:id', function(req, res) {
    Pessoa.findByIdAndRemove(req.params.id).exec(function(err, pessoa) {
        res.json(pessoa);
    });
});

router.post('/', function(req, res) {
    var pessoa = new Pessoa(req.body);
    pessoa.save(function(err, pessoa) {
        res.json(pessoa);
    });
});

module.exports = router;
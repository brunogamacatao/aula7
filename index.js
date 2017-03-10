var mongoose     = require('mongoose');
var express      = require('express');
var logger       = require('morgan');
var path         = require('path');
var compression  = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var rotas        = require('./routes');

const URL_BANCO_DE_DADOS = 'mongodb://localhost/aula7';

mongoose.connect(URL_BANCO_DE_DADOS);
var db = mongoose.connection;
// Espera abrir a conexão com o banco de dados
db.once('open', function() {
    console.log('Conexão aberta com sucesso !');
    var app = express();
    // Configuração do sevidor
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use('/', rotas);
    app.listen(3000, function() { // Inicia o servidor
        console.log('Servidor ouvindo na porta 3000');
    });
});


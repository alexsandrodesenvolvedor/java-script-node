//app.js NESTE ARQUIVO AS CONFIGURAÇẼOS  DE MIDDLEWARE ROTAS E ETC//
////////////////////////////////////////////////////////////////////

//forma de import diferente do 'const express = require('express')' só que requer
//dependencia pra funcionar. Utilizar o sucrazy
import express from 'express';
import routes from './routes';// ./ é porq não está dentro de modules


/**
 * Clases para as configuraçẽos do projeto
 */
class App {
 
    // ao chamar a classe, vai iniciar as configurações
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json()); // para trabalhar com json
    }

    routes() {
        this.server.use(routes);// adicionando também as rotas ao server que é um middleware
    }

}

//module.exports = new App().server;
export default new App().server;
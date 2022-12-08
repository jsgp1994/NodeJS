const productsRouter = require('./products.router');
const express = require('express');

function routerApi(app) {
    /*Manejo de versiones*/
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products',productsRouter);
}

module.exports = routerApi;
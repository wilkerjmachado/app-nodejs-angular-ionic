const express = require('express');
const app = express();

const index = require('./routes/index');
const clienteRoute = require('./routes/cliente');
const produtoRoute = require('./routes/produto');

app.use('/', index);
app.use('/cliente', clienteRoute);
app.use('/produto', produtoRoute);

module.exports = app;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('./db/connect');

const index = require('./routes/index');
const clienteRoute = require('./routes/cliente');
const produtoRoute = require('./routes/produto');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());
app.options('*', cors());

app.use('/', index);
app.use('/cliente', clienteRoute);
app.use('/produto', produtoRoute);

module.exports = app;
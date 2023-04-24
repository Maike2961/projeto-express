//fazendo a importação do Express
const express = require("express")
const router = require('./routes/index')

//configurações basicas do aplicativo
const app = express();
app.use('/', router);

app.use(express.json())

module.exports = app;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    codigo: String,
    nome: String,
    fabricacao: String,
    tamanho: Number,
    valor: Number
});

var Produto = mongoose.model('produto', produtoSchema);
module.exports = Produto;
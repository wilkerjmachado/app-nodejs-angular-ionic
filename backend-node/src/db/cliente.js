var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    codigo: String,
    nome: String,
    cpf: String,
    sexo: {
        type: String,
        enum : ['feminino','masculino', 'outros']
    },
    email: String
});

var Cliente = mongoose.model('cliente', clienteSchema);
module.exports = Cliente;
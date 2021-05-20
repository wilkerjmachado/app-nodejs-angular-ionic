var dbCliente = require('../db/cliente');

exports.get = (req, res, next) => {

    dbCliente.find()
        .then((cliente) => {
            res.status(200).send(cliente);
        }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res, next) => {

    dbCliente.findById(req.params.id)
        .then((person) => {
            res.status(200).send(person);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {

    const reqCliente= req.body;

    dbCliente.create(reqCliente)
        .then((cliente) => {
            res.status(200).send(cliente);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res, next) => {

    const reqCliente= req.body;

    const updatedCliente = {
        codigo: reqCliente.codigo,
        nome: reqCliente.nome,
        cpf: reqCliente.cpf,
        sexo: reqCliente.sexo,
        email: reqCliente.email,
    }

    dbCliente.findByIdAndUpdate(req.params.id, updatedCliente, { new: true })
        .then((cliente) => {
            res.status(201).send(cliente);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res, next) => {

    dbCliente.findByIdAndRemove(req.params.id).then((person) => {
        res.status(200).send({msg: 'Apagado com sucesso!'});
    }).catch(err => console.error.bind(console, `Error ${err}`))

};
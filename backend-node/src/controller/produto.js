var dbProduto = require('../db/produto');

exports.get = (req, res, next) => {


    dbProduto.find()
        .then((produto) => {
            res.status(200).send(produto);
        }).catch(err => res.status(500).send({message: 'Erro ao obter lista de produtos', erro: err}))
};

exports.getById = (req, res, next) => {

    dbProduto.findById(req.params.id)
        .then((person) => {
            res.status(200).send(person);
        }).catch(err => res.status(500).send({message: 'Erro ao obter produto', erro: err}))
};

exports.post = (req, res, next) => {

    const reqproduto= req.body;

    dbProduto.create(reqproduto)
        .then((produto) => {
            res.status(200).send(produto);
        }).catch(err => res.status(500).send({message: 'Erro ao inserir novo produto', erro: err}))
};

exports.put = (req, res, next) => {

    const reqProduto= req.body;

    const updatedProduto = {
        codigo: reqProduto.codigo,
        nome: reqProduto.nome,
        fabricacao: reqProduto.fabricacao,
        tamanho: reqProduto.tamanho,
        valor: reqProduto.valor,
    }

    dbProduto.findByIdAndUpdate(req.params.id, updatedProduto, { new: true })
        .then((produto) => {
            res.status(201).send(produto);
        }).catch(err => res.status(500).send({message: 'Erro ao atualizar produto', erro: err}))
};

exports.delete = (req, res, next) => {

    dbProduto.findByIdAndRemove(req.params.id).then((person) => {
        res.status(200).send({msg: 'Apagado com sucesso!'});
    }).catch(err => res.status(500).send({message: 'Erro ao excluir produto', erro: err}))

};
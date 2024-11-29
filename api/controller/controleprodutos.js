const produtos = require('../dados/modeloprodutos');

exports.listarProdutos = (req, res) => {
    produtos.getAllProdutos((err, results) => {
        if (err) return res.status(500).send({ mensage: 'Erro ao Listar Produtos.'});
        res.status(200).send(results);
        });
 };


 exports.criarProdutos = (req, res) => {
    const novoProduto = {
        descricao: req.body.descricao,
        preco: req.body.preco,
        nome: req.body.nome,
        validade: req.body.validade,
        idforn: req.body.idforn
      };

    produtos.createProdutos(novoProduto, (err, resultado) => {
        if (err) return res.status(500).send({ message: 'Erro ao salvar Produto.' });
        res.status(201).send(resultado);
    });
};


exports.atualizarProdutos = (req, res) => {
    const { id } = req.params;
    const fornecedorAtualizado = req.body;

    produtos.updateProdutos(id, fornecedorAtualizado, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produtos atualizado com sucesso' });
    });
};

exports.deletarProdutos = (req, res) => {
    const { id } = req.params;

    produtos.deleteProdutos(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produtos deletado com sucesso' });
    });
};
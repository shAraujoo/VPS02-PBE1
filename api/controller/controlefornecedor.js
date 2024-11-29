const fornecedor = require('../dados/modelofornecedor');

exports.listarFornecedor = (req, res) => {
    fornecedor.getAllFornecedores((err, results) => {
        if (err) return res.status(500).send({ mensage: 'Erro ao Listar Fornecedores.'});
        res.status(200).send(results);
        });
 };


 exports.criarFornecedor = (req, res) => {
    const novoFornecedor = {
        nome: req.body.nome,
        cnpj: req.body.cnpj,
        email: req.body.email
      };

    fornecedor.createFornecedor(novoFornecedor, (err, resultado) => {
        if (err) return res.status(500).send({ message: 'Erro ao salvar Fornecedor.' });
        res.status(201).send(resultado);
    });
};


exports.atualizarFornecedor = (req, res) => {
    const { id } = req.params;
    const fornecedorAtualizado = req.body;

    fornecedor.updateFornecedores(id, fornecedorAtualizado, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Fornecedor atualizado com sucesso' });
    });
};

exports.deletarFornecedor = (req, res) => {
    const { id } = req.params;

    fornecedor.deleteFornecedores(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Fornecedor deletado com sucesso' });
    });
};
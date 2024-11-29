const telefone = require('../dados/modelotelefone');

exports.listarTelefones = (req, res) => {
    telefone.getAllTelefones((err, results) => {
        if (err) return res.status(500).send({ message: 'Erro ao listar telefones.' });
        res.status(200).send(results);
    });
};

exports.listarTelefonesPorCliente = (req, res) => {
    const { clienteId } = req.params;

    telefone.getTelefonesByClienteId(clienteId, (err, results) => {
        if (err) return res.status(500).send({ message: 'Erro ao listar telefones para o cliente.' });
        res.status(200).send(results);
    });
};

exports.criarTelefone = (req, res) => {
    const novoTelefone = {
        numero: req.body.numero,
        idcliente: req.body.idcliente,
        idforn: req.body.idforn
    };

    telefone.createTelefone(novoTelefone, (err, resultado) => {
        if (err) return res.status(500).send({ message: 'Erro ao salvar telefone.' });
        res.status(201).send(resultado);
    });
};

exports.atualizarTelefone = (req, res) => {
    const { id } = req.params;
    const telefoneAtualizado = req.body;

    telefone.updateTelefone(id, telefoneAtualizado, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Telefone atualizado com sucesso' });
    });
};

exports.deletarTelefone = (req, res) => {
    const { id } = req.params;

    telefone.deleteTelefone(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Telefone deletado com sucesso' });
    });
};
const cliente = require('../dados/modelocliente');

exports.listarClientes = (req, res) => {
    cliente.getAllClientes((err, results) => {
        if (err) return res.status(500).send({ message: 'Erro ao listar clientes.' });
        res.status(200).send(results);
    });
};

exports.criarCliente = (req, res) => {
    const novoCliente = {
        nome: req.body.nome,
        pagamento: req.body.pagamento
      };

    cliente.createCliente(novoCliente, (err, cliente) => {
        if (err) return res.status(500).send({ message: 'Erro ao salvar cliente.' });
        res.status(201).send(cliente);
    });
};

exports.atualizarCliente = (req, res) => {
    const { id } = req.params;
    const clienteAtualizado = req.body;

    cliente.updateCliente(id, clienteAtualizado, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Cliente atualizado com sucesso' });
    });
};

exports.deletarCliente = (req, res) => {
    const { id } = req.params;

    cliente.deleteCliente(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        
        res.json({ message: 'Cliente deletado com sucesso' });
    });
};
const pedidos = require('../dados/modelopedidos');

exports.listarPedidos = (req, res) => {
    pedidos.getAllPedidos((err, results) => {
        if (err) return res.status(500).send({ mensage: 'Erro ao Listar Pedidos.'});
        res.status(200).send(results);
        });
 };


 exports.criarPedido = (req, res) => {
    const novoPedido = {
        idcliente: req.body.idcliente,
        idprod: req.body.idprod,
        idtelefone: req.body.idtelefone,
        datalancamento: req.body.datalancamento,
        total: req.body.total
      };

      pedidos.createPedidos(novoPedido, (err, resultado) => {
        if (err) return res.status(500).send({ message: 'Erro ao salvar Pedido.' });
        res.status(201).send(resultado);
    });
};


exports.atualizarPedido = (req, res) => {
    const { id } = req.params;
    const pedidoAtualizado = req.body;

    pedidos.updatePedidos(id, pedidoAtualizado, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Pedidos atualizado com sucesso' });
    });
};

exports.deletarPedido = (req, res) => {
    const { id } = req.params;

    pedidos.deletePedidos(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Pedidos deletado com sucesso' });
    });
};
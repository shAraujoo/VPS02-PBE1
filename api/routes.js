const express = require('express');
const router = express.Router();
const telefoneController = require('./controller/controletelefone');
const clienteController = require('./controller/controleclientes');
const fornecedorController = require('./controller/controlefornecedor');
const produtosController = require('./controller/controleprodutos');
const pedidoController = require('./controller/controlepedidos');

// Rotas para clientes
router.get('/clientes', clienteController.listarClientes);
router.post('/clientes', clienteController.criarCliente);
router.delete('/clientes/:id', clienteController.deletarCliente);
router.put('/clientes/:id', clienteController.atualizarCliente);

//Routes Telefone
router.post('/telefones', telefoneController.criarTelefone);
router.put('/telefones/:id', telefoneController.atualizarTelefone);
router.get('/telefones', telefoneController.listarTelefones);
router.delete('/telefones/:id', telefoneController.deletarTelefone);

//Routes Fornecedores

router.post('/fornecedores', fornecedorController.criarFornecedor);
router.put('/fornecedores/:id', fornecedorController.atualizarFornecedor);
router.get('/fornecedores', fornecedorController.listarFornecedor);
router.delete('/fornecedores/:id', fornecedorController.deletarFornecedor);

//routes produtos

router.post('/produtos', produtosController.criarProdutos);
router.put('/produtos/:id', produtosController.atualizarProdutos);
router.get('/produtos', produtosController.listarProdutos);
router.delete('/produtos/:id', produtosController.deletarProdutos);

//rotas Pedidos

router.post('/pedidos', pedidoController.criarPedido);
router.put('/pedidos/:id', pedidoController.atualizarPedido);
router.get('/pedidos', pedidoController.listarPedidos);
router.delete('/pedidos/:id', pedidoController.deletarPedido);

module.exports = router;
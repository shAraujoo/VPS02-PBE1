const connect = require('../connect/connect');

const getAllPedidos = (callback) => {
    connect.query('SELECT * FROM pedidos', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
        });
};


const createPedidos = (data, callback) => {
    connect.query('INSERT INTO pedidos SET ?', data, (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });  
    });
};

const updatePedidos = (id, data, callback) => {
    connect.query('UPDATE pedidos SET ? WHERE idpedido = ?', [data, id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Pedidos atualizado com sucesso' });
    });
};

const deletePedidos = (id, callback) => {
    connect.query('DELETE FROM pedidos WHERE idpedido = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Pedidos deletado com sucesso' });
    });
};

module.exports = {
    getAllPedidos,
    createPedidos,
    updatePedidos,
    deletePedidos
};
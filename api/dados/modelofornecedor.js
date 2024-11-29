const connect = require('../connect/connect');

const getAllFornecedores = (callback) => {
    connect.query('SELECT * FROM fornecedores', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
        });
};


const createFornecedor = (data, callback) => {
    connect.query('INSERT INTO fornecedores SET ?', data, (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });  
    });
};

const updateFornecedores = (id, data, callback) => {
    connect.query('UPDATE fornecedores SET ? WHERE idforn = ?', [data, id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Fornecedores atualizado com sucesso' });
    });
};

const deleteFornecedores = (id, callback) => {
    connect.query('DELETE FROM fornecedores WHERE idforn = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Fornecedores deletado com sucesso' });
    });
};

module.exports = {
    getAllFornecedores,
    createFornecedor,
    updateFornecedores,
    deleteFornecedores
};
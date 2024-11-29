const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'projetocantina'
})

connection.connect((err) => {
    if (err) {
        console.error('Erro de conexão:', err);
    } else {
        console.log('Conectado Com Sucesso!');
    }
});

module.exports = connection;
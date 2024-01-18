const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '29122912',
  database: 'icommerce'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conexão bem-sucedida ao MySQL!');
  }
});

const categoriaDeProdutosModulo = require('./mysql/categoriaDeProdutos')({ connection });

module.exports = {
  categoriaDeProdutosModulo
};

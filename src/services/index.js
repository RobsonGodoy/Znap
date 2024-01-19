const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conexão bem-sucedida ao MySQL!');
  }
});

const categoriaDeProdutosModulo = require('./mysql/categoriaDeProdutos')({ connection });
const produtoModulo = require('../services/mysql/produtoService')({ connection });
const clienteModulo = require('../services/mysql/clienteService')({ connection });
const pedidoMestreModulo= require('../services/mysql/pedidoMestreService')({ connection });
const pedidoItemModulo= require('../services/mysql/pedidoItemService')({ connection });

module.exports = {
      categoriaDeProdutosModulo,
      produtoModulo,
      clienteModulo,
      pedidoMestreModulo,
      pedidoItemModulo
};

const db = require('../services');
const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const pedidoMestreRoutes = require('./routes/pedidoMestreRoutes');
const pedidoItemRoutes = require('./routes/pedidoItemRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');

const routes = (server) => {
  categoriaRoutes(server)
  produtoRoutes(server);
  clienteRoutes(server);
  pedidoMestreRoutes(server);
  pedidoItemRoutes(server);
};  

module.exports = routes;

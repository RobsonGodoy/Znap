const db = require('../../services');

const pedidoMestreRoutes = (server) => {
  server.get('/pedidosMestre', (req, res, next) => {
    db.pedidoMestreModulo.all()
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao obter pedidos mestre:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.post('/pedidosMestre', (req, res, next) => {
    const { data, numero_do_pedido, id_cliente } = req.body;

    db.pedidoMestreModulo.save(data, numero_do_pedido, id_cliente)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao adicionar pedido mestre:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.put('/pedidosMestre/:id', (req, res, next) => {
    const { id } = req.params;
    const { data, numero_do_pedido, id_cliente } = req.body;

    db.pedidoMestreModulo.update(id, data, numero_do_pedido, id_cliente)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao atualizar pedido mestre:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.del('/pedidosMestre/:id', (req, res, next) => {
    const { id } = req.params;

    db.pedidoMestreModulo.del(id)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao excluir pedido mestre:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });
};

module.exports = pedidoMestreRoutes;

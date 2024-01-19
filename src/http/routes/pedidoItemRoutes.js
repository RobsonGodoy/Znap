const db = require('../../services');

const pedidoItemRoutes = (server) => {
  server.get('/pedidosItens', (req, res, next) => {
    db.pedidoItemModulo.all()
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao obter itens de pedido:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.post('/pedidosItens', (req, res, next) => {
    const { id_pedido_mestre, id_produto, qtde, preco } = req.body;

    db.pedidoItemModulo.save(id_pedido_mestre, id_produto, qtde, preco)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao adicionar item de pedido:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.put('/pedidosItens/:id', (req, res, next) => {
    const { id } = req.params;
    const { id_pedido_mestre, id_produto, qtde, preco } = req.body;

    db.pedidoItemModulo.update(id, id_pedido_mestre, id_produto, qtde, preco)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao atualizar item de pedido:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.del('/pedidosItens/:id', (req, res, next) => {
    const { id } = req.params;

    db.pedidoItemModulo.del(id)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao excluir item de pedido:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });
};

module.exports = pedidoItemRoutes;

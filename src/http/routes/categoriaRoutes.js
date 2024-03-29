const db = require('../../services');

const categoriaRoutes = (server) => {
  server.get('/categorias', (req, res, next) => {
    db.categoriaDeProdutosModulo.all()
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao obter categorias:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.post('/categorias', (req, res, next) => {
    const { descricao } = req.body;

    db.categoriaDeProdutosModulo.save(descricao)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao adicionar categoria:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.put('/categorias/:id', (req, res, next) => {
    const { id } = req.params;
    const { descricao } = req.body;

    db.categoriaDeProdutosModulo.update(id, descricao)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao atualizar categoria:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.del('/categorias/:id', (req, res, next) => {
    const { id } = req.params;

    db.categoriaDeProdutosModulo.del(id)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao excluir categoria:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });
}

module.exports = categoriaRoutes;
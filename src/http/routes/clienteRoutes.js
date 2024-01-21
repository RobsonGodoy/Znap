const db = require('../../services');

const clienteRoutes = (server) => {
  server.get('/clientes', (req, res, next) => {
    db.clienteModulo.all()
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao obter clientes:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.post('/clientes', (req, res, next) => {
    const { nome, email } = req.body;

    db.clienteModulo.save(nome, email)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao adicionar cliente:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.put('/clientes/:id', (req, res, next) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    db.clienteModulo.update(id, nome, email)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao atualizar cliente:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });

  server.del('/clientes/:id', (req, res, next) => {
    const { id } = req.params;

    db.clienteModulo.del(id)
      .then(result => {
        res.send(result);
        next();
      })
      .catch(error => {
        console.error('Erro ao excluir cliente:', error);
        res.send(500, 'Erro interno do servidor');
        next();
      });
  });
};

module.exports = clienteRoutes;

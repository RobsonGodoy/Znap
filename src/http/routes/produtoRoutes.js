// Em produtoRoutes.js
const db = require('../../services');

const produtoRoutes = (server) => {

    server.get('/produtos', (req, res, next) => {
        db.produtoModulo.all()
            .then(result => {
                console.log(result);
                res.send(result);
            })
            .catch(error => {
                console.error('Erro ao obter Lista de Produtos:', error);
                res.send(500, 'Erro interno do servidor');
                next();
            });
    })


    server.post('/produtos', (req, res, next) => {
        const { nome, preco, id_categoria } = req.body;

        db.produtoModulo.save(nome, preco, id_categoria)
            .then(result => {
                res.send(result);
                next();
            })
            .catch(error => {
                console.error('Erro ao adicionar produto:', error);
                res.send(500, 'Erro interno do servidor');
                next();
            });
    });

    server.put('/produtos/:id', (req, res, next) => {
        const { id } = req.params;
        const { nome, preco, id_categoria } = req.body;

        db.produtoModulo.update(id, nome, preco, id_categoria)
            .then(result => {
                res.send(result);
                next();
            })
            .catch(error => {
                console.error('Erro ao atualizar produto:', error);
                res.send(500, 'Erro interno do servidor');
                next();
            });
    });

    server.del('/produtos/:id', (req, res, next) => {
        const { id } = req.params;

        db.produtoModulo.del(id)
            .then(result => {
                res.send(result);
                next();
            })
            .catch(error => {
                console.error('Erro ao excluir produto:', error);
                res.send(500, 'Erro interno do servidor');
                next();
            });
    });
};

module.exports = produtoRoutes;

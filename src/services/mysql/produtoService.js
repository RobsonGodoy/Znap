const produtoService = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection } = (deps);
        const consulta = `SELECT
        p.id_produto,
        p.nome,
        p.preco,
        c.id_categoria,
        c.descricao AS categoria_de_produtos_descricao
      FROM Produtos p
      INNER JOIN Categoria_de_Produtos c ON p.id_categoria = c.id_categoria;
      `
        connection.query(consulta, (error, results) => {
          if (error) {
            reject(error)
          }
          const listaDeProdutos = results.map(produto => ({
            id_produto: produto.id_produto,
            nome: produto.nome,
            preco: produto.preco,
            id_categoria: {
              id_categoria: produto.id_categoria,
              descricao: produto.categoria_de_produtos_descricao
            }
          }));

          resolve({ 'Lista de Produtos': listaDeProdutos });
        });
      });
    },
    save: (nome, preco, id_categoria) => {
      return new Promise((resolve, reject) => {
        const { connection } = deps;
        connection.query('INSERT INTO Produtos (nome, preco, id_categoria) VALUES (?, ?, ?)', [nome, preco, id_categoria], (error, results) => {
          if (error) {
            reject(error);
          }
          resolve({ id_produto: results.insertId, nome, preco, id_categoria });
        });
      });
    },
    update: (id, nome, preco, id_categoria) => {
      return new Promise((resolve, reject) => {
        const { connection } = deps;
        connection.query('UPDATE Produtos SET nome = ?, preco = ?, id_categoria = ? WHERE id_produto = ?', [nome, preco, id_categoria, id], (error, results) => {
          if (error) {
            reject(error);
          }
          resolve({ id_produto: id, nome, preco, id_categoria });
        });
      });
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection } = deps;
        connection.query('DELETE FROM Produtos WHERE id_produto = ?', [id], (error, results) => {
          if (error) {
            reject(error);
          }
          resolve({ id_produto: id });
        });
      });
    }
  };
};

module.exports = produtoService;

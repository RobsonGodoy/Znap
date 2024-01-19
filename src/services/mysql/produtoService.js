const produtoService = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection } = (deps);
        connection.query('SELECT * FROM produtos', (error, results) => {
          if (error) {
            reject(error)
          }
          resolve({ 'Lista de Produtos': results });
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

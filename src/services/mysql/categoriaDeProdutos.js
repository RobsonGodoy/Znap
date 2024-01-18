const categoriaDeProdutos = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection } = deps;
        connection.query('SELECT * FROM categoria_de_produtos', (error, results) => {
          if (error) {
            reject(error);
          }
          resolve({ 'categoria de produtos': results });
        });
      });
    },
    save: (descricao) => {
      return new Promise((resolve, reject) => {
        const { connection } = deps;
        connection.query('INSERT INTO categoria_de_produtos (descricao) VALUES (?)', [descricao], (error, results) => {
          if (error) {
            reject(error);
          }
          resolve({ id_categoria: results.insertId, descricao });
        });
      });
    },
    update: (id, descricao) => {
      return new Promise((resolve, reject) => {
        const { connection } = deps;
        connection.query('UPDATE categoria_de_produtos SET descricao = ? WHERE id_categoria = ?', [descricao, id], (error, results) => {
          if (error) {
            reject(error);
          }
          resolve({ id_categoria: id, descricao });
        });
      });
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection } = deps;
        connection.query('DELETE FROM categoria_de_produtos WHERE id_categoria = ?', [id], (error, results) => {
          if (error) {
            reject(error);
          }
          resolve({ id_categoria: id });
        });
      });
    }
  };
};

module.exports = categoriaDeProdutos;

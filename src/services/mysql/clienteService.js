const clienteService = deps => {
    return {
      all: () => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('SELECT * FROM Clientes', (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ 'Lista de Clientes': results });
          });
        });
      },
      save: (nome, email) => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('INSERT INTO Clientes (nome, email) VALUES (?, ?)', [nome, email], (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ id_cliente: results.insertId, nome, email });
          });
        });
      },
      update: (id, nome, email) => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('UPDATE Clientes SET nome = ?, email = ? WHERE id_cliente = ?', [nome, email, id], (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ id_cliente: id, nome, email });
          });
        });
      },
      del: (id) => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('DELETE FROM Clientes WHERE id_cliente = ?', [id], (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ id_cliente: id });
          });
        });
      }
    };
  };
  
  module.exports = clienteService;
  
const pedidoMestreService = deps => {
    return {
      all: () => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('SELECT * FROM Pedido_Mestre', (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ 'Lista de Pedidos Mestre': results });
          });
        });
      },
      save: (data, numero_do_pedido, id_cliente) => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('INSERT INTO Pedido_Mestre (data, numero_do_pedido, id_cliente) VALUES (?, ?, ?)', [data, numero_do_pedido, id_cliente], (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ id_pedido_mestre: results.insertId, data, numero_do_pedido, id_cliente });
          });
        });
      },
      update: (id, data, numero_do_pedido, id_cliente) => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('UPDATE Pedido_Mestre SET data = ?, numero_do_pedido = ?, id_cliente = ? WHERE id_pedido_mestre = ?', [data, numero_do_pedido, id_cliente, id], (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ id_pedido_mestre: id, data, numero_do_pedido, id_cliente });
          });
        });
      },
      del: (id) => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('DELETE FROM Pedido_Mestre WHERE id_pedido_mestre = ?', [id], (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ id_pedido_mestre: id });
          });
        });
      }
    };
  };
  
  module.exports = pedidoMestreService;
  
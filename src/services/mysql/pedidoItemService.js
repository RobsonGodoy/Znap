const pedidoItemService = deps => {
    return {
      all: () => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('SELECT * FROM Pedido_Item', (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ 'Lista de Itens de Pedido': results });
          });
        });
      },
      save: (id_pedido_mestre, id_produto, qtde, preco) => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('INSERT INTO Pedido_Item (id_pedido_mestre, id_produto, qtde, preco) VALUES (?, ?, ?, ?)', [id_pedido_mestre, id_produto, qtde, preco], (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ id_pedido_item: results.insertId, id_pedido_mestre, id_produto, qtde, preco });
          });
        });
      },
      update: (id, id_pedido_mestre, id_produto, qtde, preco) => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('UPDATE Pedido_Item SET id_pedido_mestre = ?, id_produto = ?, qtde = ?, preco = ? WHERE id_pedido_item = ?', [id_pedido_mestre, id_produto, qtde, preco, id], (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ id_pedido_item: id, id_pedido_mestre, id_produto, qtde, preco });
          });
        });
      },
      del: (id) => {
        return new Promise((resolve, reject) => {
          const { connection } = deps;
          connection.query('DELETE FROM Pedido_Item WHERE id_pedido_item = ?', [id], (error, results) => {
            if (error) {
              reject(error);
            }
            resolve({ id_pedido_item: id });
          });
        });
      }
    };
  };
  
  module.exports = pedidoItemService;
  
const pedidoMestreService = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection } = deps;
        const consulta = `
          SELECT Pedido_Mestre.*, Clientes.nome as nome_cliente, Clientes.email as email_cliente
          FROM Pedido_Mestre
          INNER JOIN Clientes ON Pedido_Mestre.id_cliente = Clientes.id_cliente;
        `
        connection.query(consulta, (error, results) => {
          if (error) {
            reject(error);
          }
          const pedidosMestreComCliente = results.map(pedidoMestre => ({
            id_pedido_mestre: pedidoMestre.id_pedido_mestre,
            data: pedidoMestre.data,
            numero_do_pedido: pedidoMestre.numero_do_pedido,
            cliente: {
              id_cliente: pedidoMestre.id_cliente,
              nome: pedidoMestre.nome_cliente,
              email: pedidoMestre.email_cliente
            }
          }))
          resolve({ 'Lista de Pedidos Mestre': pedidosMestreComCliente });
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

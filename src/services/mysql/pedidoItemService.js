const pedidoItemService = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection } = deps;
        const consulta = `SELECT
        pi.id_pedido_item,
        pi.qtde,
        pi.preco,
        pm.id_pedido_mestre,
        pm.data AS data_pedido_mestre,
        pm.numero_do_pedido AS n_pedido_mestre,
        c.id_cliente,
        c.nome AS nome_cliente,
        c.email AS email_cliente,
        p.id_produto,
        p.nome AS nome_produto,
        p.preco AS preco_produto,
        pc.id_categoria,
        pc.descricao AS categoria_de_produtos_descricao
      FROM Pedido_Item pi
      INNER JOIN Pedido_Mestre pm ON pi.id_pedido_mestre = pm.id_pedido_mestre
      INNER JOIN Clientes c ON pm.id_cliente = c.id_cliente
      INNER JOIN Produtos p ON pi.id_produto = p.id_produto
      INNER JOIN Categoria_de_Produtos pc ON p.id_categoria = pc.id_categoria;
      `;
        connection.query(consulta, (error, results) => {
          if (error) {
            reject(error);
          }
          const itensPedido = results.map(item => ({
            id_pedido_item: item.id_pedido_item,
            qtde: item.qtde,
            preco: item.preco,
            pedido_mestre: {
              id_pedido_mestre: item.id_pedido_mestre,
              data: item.data_pedido_mestre,
              numero_do_pedido: item.n_pedido_mestre,
              id_cliente: {
                id_cliente: item.id_cliente,
                nome: item.nome_cliente,
                email: item.email_cliente
              }
            },
            produto: {
              id_produto: item.id_produto,
              nome: item.nome_produto,
              preco: item.preco_produto,
              id_categoria:{
                id_categoria: item.id_categoria,
                descricao: item.categoria_de_produtos_descricao
              }
            },

          }));
          resolve({ 'Lista de Itens de Pedido': itensPedido });
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

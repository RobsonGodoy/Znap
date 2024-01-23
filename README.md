## Instruções de Configuração
Pré-requisitos:

Certifique-se de ter o Node.js instalado em seu sistema.
Tenha uma instância do MySQL em execução e configure as credenciais de banco de dados no arquivo de configuração.

Configuração do Banco de Dados:

Crie um arquivo .env no diretório do seu projeto backend.
Adicione as seguintes variáveis de ambiente ao arquivo .env e configure com suas credenciais de banco de dados:


DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=

## Instalação de Dependências:

 Navegue até o diretório do projeto backend:
 
  cd/Znap

Instale as dependências:
 
npm install

## Instruções de Uso
Executando o Servidor:

 Navegue até o diretório do projeto backend:
 
cd/Znap
#Inicie o servidor: 

npm run dev

O servidor estará disponível em http://localhost:3456/.

## Rotas da API

A tabela a seguir descreve as principais rotas da API, os métodos suportados (GET, POST, PUT, DELETE) e uma breve descrição do que cada rota faz.

| Rota                  | Método | Descrição                                |
|-----------------------|--------|------------------------------------------|
| `/categorias`         | GET    | Obter lista de categorias.               |
| `/categorias`         | POST   | Adicionar nova categoria.                |
| `/categorias/:id`     | PUT    | Atualizar categoria existente.           |
| `/categorias/:id`     | DELETE | Excluir categoria existente.             |
| `/clientes`           | GET    | Obter lista de clientes.                 |
| `/clientes`           | POST   | Adicionar novo cliente.                  |
| `/clientes/:id`       | PUT    | Atualizar cliente existente.             |
| `/clientes/:id`       | DELETE | Excluir cliente existente.               |
| `/pedidosItens`       | GET    | Obter lista de itens de pedido.          |
| `/pedidosItens`       | POST   | Adicionar novo item de pedido.           |
| `/pedidosItens/:id`   | PUT    | Atualizar item de pedido existente.      |
| `/pedidosItens/:id`   | DELETE | Excluir item de pedido existente.        |
| `/pedidosMestre`      | GET    | Obter lista de pedidos mestre.           |
| `/pedidosMestre`      | POST   | Adicionar novo pedido mestre.            |
| `/pedidosMestre/:id`  | PUT    | Atualizar pedido mestre existente.       |
| `/pedidosMestre/:id`  | DELETE | Excluir pedido mestre existente.         |
| `/produtos`           | GET    | Obter lista de produtos.                 |
| `/produtos`           | POST   | Adicionar novo produto.                  |
| `/produtos/:id`       | PUT    | Atualizar produto existente.             |
| `/produtos/:id`       | DELETE | Excluir produto existente.               |

Certifique-se de fornecer os parâmetros corretos ao fazer solicitações (por exemplo, `:id` para identificadores únicos).


const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors(
  //{origin: "http:localhost:8080"}
));
app.use(express.json());
app.use(routes);


app.listen(3333);

/*Metodos HTTP
GET: Buscar uma informação no backend
POST: Criar uma informação no backend
PUT: Alterar uma informação no backend
DELETE: Deletar uma informação no backend
*/

/*Instalando o SQLITE Banco de dados
yarn add knex
npm install sqlite3
npx knex init

npx knex migrate:make create_ong

Configurar o arquivo:
Método up para a criação
Método down em caso de erro matar os objetos criados em up

Para executar basta digitar
knex migrate:latest

*/
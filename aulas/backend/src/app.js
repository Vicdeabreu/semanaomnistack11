const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); /* Importando as rotas  */

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/*

Métodos HTTP:
GET:Buscar uma informacao do back-end
POST: Criar uma informacao no back-end
PUT: Alterar uma informacao no back-end
DELETE: Deletar uma informacao no back-end

/*

Tipos de parámetros:

Query Params: Parámetros nomeados na rota após "?" (filtros, paginacao). (Se mandan por query)
Route Params: Parámetros utilizados para identificar recursos. (Se mandan por param)
Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

/*
  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  NoSQL: MongoDB, CouchDB, etc
*/

/*
  Driver: SELECT * FROM users
  Query Builder: table('users').select('*').where()
*/


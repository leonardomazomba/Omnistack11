const knex = require('knex');
const configuration = require('../../knexfile');

//pego do configuration a conexao de desenvolvimento
const connection = knex(configuration.development);

module.exports = connection;
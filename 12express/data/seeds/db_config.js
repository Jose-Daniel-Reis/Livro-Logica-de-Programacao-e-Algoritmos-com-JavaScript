const knex = require('knex');
const config = ('../knexfile.js');
const dbknex = knex(config.development);
module.exports = dbknex;
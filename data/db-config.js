const knex = require('knex');
const configs = require('../knexfile.js');

// eslint-disable-next-line no-undef
module.exports = knex(configs[process.env.NODE_ENV]);
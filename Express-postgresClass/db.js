const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo-database',
    password: 'postgre',
    port: 5432,
});

module.exports = pool;
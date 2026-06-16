const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(' Error crítico al conectar con PostgreSQL:', err.stack);
    } else {
        console.log('Conexión exitosa a PostgreSQL. Base de datos lista.');
    }
});

module.exports = pool;
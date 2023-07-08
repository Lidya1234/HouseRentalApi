// import pg from "pg";
// const { Pool } = pg;
const Pool = require('pg').Pool;
// dotenv.config();
// const databaseConfig = {connectionString: process.env.DATABASE_URL}
// const pool = new Pool(databaseConfig)
const pool = new Pool({
    user: "Lidu",
    host: "localhost",
    database: "Houses",
    password: "lidu1234",
    port: "5433"
})

module.exports = pool;
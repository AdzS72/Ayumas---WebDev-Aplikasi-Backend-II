const { Client } = require("pg");

const databaseConfig = new Client({
  host: "localhost",
  user: "postgres",
  database: "ayumas_backend_2",
  port: 5432,
  password: "hnsaqs2907",
});

module.exports = databaseConfig;

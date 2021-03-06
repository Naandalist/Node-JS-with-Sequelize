const Sequelize = require("sequelize");
module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 10000
    }
  }
);

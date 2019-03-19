const Sequelize = require("sequelize");
const DATABASE_URL = 'postgres://localhost/acmeproductsales'

module.exports = new Sequelize(process.env.DATABASE_URL || DATABASE_URL)

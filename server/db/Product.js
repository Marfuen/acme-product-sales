const Sequelize = require("sequelize");
const db = require("./db");

const Product = db.define("product", {
  name: Sequelize.STRING,
  onSale: {
    type: Sequelize.BOOLEAN,
    get(){
      return this.getDataValue('discountPercent') !== null;
    }
  },
  price: Sequelize.INTEGER,
  availability: Sequelize.STRING,
  discountPercent: Sequelize.INTEGER,
  salePrice: {
    type: Sequelize.VIRTUAL,
    get(){
      return this.getDataValue('price') - (this.getDataValue('price') * (this.getDataValue('discountPercent') / 100))
    }
  }
})

module.exports = Product

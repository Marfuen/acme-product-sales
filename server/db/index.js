const Product = require("./Product");
const db = require("./db");

const syncAndSeed = (force) => {
  return db.sync({force})
    .then(() => {
      return Promise.all([
        Product.create({name: "Foo", price: 3, availability: 'instock', discountPercent: 20}),
        Product.create({name: "Bar", price: 8, availability: 'instock', discountPercent: null}),
        Product.create({name: "Bazz", price: 4, availability: 'backordered', discountPercent: null}),
      ])
    })
    .catch(e => console.log(e))
}

module.exports = {
  db,
  Product,
  syncAndSeed,
}

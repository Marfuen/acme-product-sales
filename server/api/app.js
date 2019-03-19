const express = require("express");
const app = express();
const { Product, db } = require("../db/index");

app.use(express.json())

app.get("/api/products", (req,res,next)=> {
  Product.findAll()
         .then((products) => res.json(products))
         .catch(next);
});

app.delete("/api/products/:id", (req,res,next) =>{
  Product.destroy({where: {id: req.params.id*1}})
         .then(() => {
           Product.findAll()
                  .then(products => res.json(products))
         })
         .catch(next);
});

app.post("/api/products", (req,res,next) => {
  Product.create(req.body)
         .then(product => res.send(product))
         .catch(e => console.log(e));
});

module.exports = app;

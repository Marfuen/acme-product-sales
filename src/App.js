import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Products from "./Products";
import axios from "axios";
import CreateProduct from "./CreateProduct";
import Home from "./Home";

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    }
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  deleteProduct(id){
    return axios.delete(`/api/products/${id}`)
         .then(res => res.data)
         .then(products => this.setState({products: [...products]}))
         .catch(e => console.log(e));
  }
  createProduct(product, history){
    return axios.post('/api/products', product)
         .then(res => res.data)
         .then(() => {
           axios.get("/api/products")
                .then(res => res.data)
                .then(products => this.setState({products: [...products]}));
         })
         .then(() => product.onSale ? history.push('/sales') : history.push('/products'))
         .catch(e => console.log(e));
  }
  componentDidMount(){
    axios.get("/api/products")
         .then(res => res.data)
         .then(products => this.setState({products: [...products]}))
         .catch(e => console.log(e));
  }
  render(){
    const { products } = this.state;
    const { deleteProduct, createProduct } = this;
    return(
      <HashRouter>
        <div className="container">
          <h1>Acme Products/Sales</h1>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route path="/products" render={() => <Products products={products} deleteProduct={deleteProduct}/>}/>
            <Route path="/sales" render={() => <Products products={products.filter(prod => prod.onSale)} deleteProduct={deleteProduct}/>}/>
            <Route path="/create" render={({history}) => <CreateProduct createProduct={createProduct} history={history}/>} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

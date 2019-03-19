import React from "react";

const Products = ({products, deleteProduct}) => {
  return(
    <ul className="list-group">
      {products.map(product => (
        <li key={product.id} className="list-group-item">
          {product.name}
          <br/>
          <span style={product.onSale ? {textDecoration: 'line-through', marginBottom: '2px'} : {}}>${product.price}</span>
          <br/>
          <div>{product.salePrice === product.price ? '' : <span className="badge badge-success " style={{marginBottom: '2px'}}>{product.salePrice}</span>}</div>
          {
            product.availability === 'instock' ?
            <span className="badge badge-success" style={{marginBottom: '2px'}}>{product.availability}</span> :
            <span className="badge badge-warning" style={{marginBottom: '2px'}}>{product.availability}</span>
          }
          <br/>
          <button type="submit" className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Products;

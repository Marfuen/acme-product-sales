import React, { Component } from "react";

class CreateProduct extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      price: 0,
      discountPercent: 0,
      availability: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange({target}){
    this.setState({
      [target.name]: target.value
    });
  }
  onSubmit(event){
    event.preventDefault();
    return this.props.createProduct(this.state, this.props.history)
  }
  render(){
    const { name, price, discountPercentage, availability } = this.state;
    const { onChange, onSubmit } = this;
    return(
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input onChange={onChange} type="text" name="name" className="form-control" value={name}/>
        </div>
        <div>
          <label>Price</label>
          <input type="number" onChange={onChange} className="form-control" name="price" value={price}/>
        </div>
        <div>
          <label>Discount Percentage</label>
          <input type="number" onChange={onChange} className="form-control" name="discountPercent" value={discountPercentage}/>
        </div>
        <div>
          <label htmlFor="availability">Availability</label>
          <select className="form-control" name="availability" value={availability} onChange={onChange}>
            <option value="in-stock">in-stock</option>
            <option value="backordered">backordered</option>
            <option value="discontinued">discontinued</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop: '10px'}}>Create</button>
      </form>
    )
  }
}

export default CreateProduct;

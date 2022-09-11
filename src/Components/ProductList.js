import React, { Component } from 'react'
import withSearch from './Hoc';


class ProductList extends Component {
    render(){
  return (
   
    <div className='lists'>
    
     {
        this.props.products.map(items =>{
            return(   
                <h5>{items.pName}  Rs.{items.price} {items.color}</h5>
            )
        })
     }
    </div>
   
  )
}
}
export default withSearch(ProductList);

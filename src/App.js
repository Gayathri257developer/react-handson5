import React, { Component } from 'react'
import ProductList from './Components/ProductList';
import Pure from './Components/Pure';
import './App.css'

class App extends Component {
 render(){
  return (
    <div className='App'>
      <ProductList/>
      <hr/>
      <Pure/>
    </div>
  )
 }
}
export default App;

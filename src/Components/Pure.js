import React, { PureComponent } from 'react';
// import User from './User';

class Pure extends PureComponent{
  constructor(){
    super();
    this.state={
      count: 0
    }
  }

  render(){
    console.warn('render');
    return (
      <div className="App">
        <header className="App-header">
 
        <h1>Pure Components: </h1>
        <ul>
        <li>These are the one which prevents being re-rendered, if the values of state and props has not changed.</li>
        <li>"shouldComponentUpdate", a lifecycle method which will called in these Components to compare the state and props value.</li>
        </ul>

          <h4>Pure Component State Count {this.state.count}</h4>

          
          <button onClick={()=>{this.setState({count: this.state.count+1})}}>Increment</button>
          
          <button onClick={()=>{this.setState({count: this.state.count-1})}}>Decrement</button>
        </header>
      </div>
    );
  }

}

export default Pure;
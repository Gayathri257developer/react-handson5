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
          <h1>Pure Component State Count {this.state.count}</h1>
          
          <button onClick={()=>{this.setState({count: this.state.count+1})}}>Increment</button>
          
          <button onClick={()=>{this.setState({count: this.state.count-1})}}>Decrement</button>
        </header>
      </div>
    );
  }

}

export default Pure;
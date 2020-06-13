import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import {DISHES} from './SharedFiles/dish';
import Menu from './component/Menu';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    }
}
render(){
  return (
    <div className="App">
         <Nav/>
        <Menu dishes={this.state.dishes}/>
    </div>
  );
}
}

export default App;

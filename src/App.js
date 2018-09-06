import React, { Component } from 'react';
import './App.css';
import { AppHeader } from './childs/appHeader';
import {Tile} from './childs/Tile';
import ViewTemp from './childs/ViewTemp';

class App extends Component {
  constructor(){
    super();
    this.state={
      weatherData:null,
      city :[{name:'delhi', lat:'28.7041',long:'77.1025'},{name:'mumbai',lat:'19.0760',long:'72.8777'},{name:'pune',lat:'18.5204',long:'73.8567'},
      {name:'kolkata', lat:'22.5726', long:'88.3639'}]
    };
  }
  render() {
    return (
      <div className="App">
       <AppHeader/>
        <div className="clearfix container">
       {this.state.city.map((value)=>{
         return <Tile key={value.name} dataObj={value} />
       })}
       </div>
       <ViewTemp/>
      </div>
    );
  }
}

export default App;

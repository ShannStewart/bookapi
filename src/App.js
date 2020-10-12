import React, { Component } from 'react';
import './App.css';
import Search from './search'
import Result from './results'

class App extends Component {
  render(){
    return (
      <div className="App">
       <h1 class="title" >Google Book Search</h1>
       <Search/>
       <Result/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import FishTable from './components/FishTable';
import './App.css';

class App extends Component {

  render() {
    console.log(this.props, this.state)
    return (
      <div className="App">
        <FishTable/>
      </div>
    );
  }
}



export default App;

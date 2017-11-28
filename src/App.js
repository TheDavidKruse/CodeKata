import React, { Component } from 'react';
import FishTableMain from './components/FishTable/FishTableMain';
import './App.css';

class App extends Component {

  render() {
    console.log(this.props, this.state)
    return (
      <div className="App">
        <FishTableMain/>
      </div>
    );
  }
}



export default App;

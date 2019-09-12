import React , { Component }from 'react';
// import Header from "./templates/header";
// import Body from './templates/body';
import Sidebar from './templates/sidebar';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    )
  }
}

export default App;

import React , { Component }from 'react';
import Footer from './templates/footer';
import Header from "./templates/header";
import Body from './templates/body';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mt-5 pt-5">
          <h1 className="black">This is React</h1>
        </div>
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;

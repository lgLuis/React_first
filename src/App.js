import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Jumbotron from './jumbotron'

//1ra modificación
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Jumbotron></Jumbotron>
        <Card> </Card>
        <Card> </Card>
        <Card> </Card>
        <Jumbotron></Jumbotron>
      </div>
    );
  }
}

export default App;

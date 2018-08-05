import React, { Component } from 'react';
import './App.css';
//import Header from './components/Header';
import FormCadastro from './components/FormCadastro';
import ListPessoas from './components/ListPessoas';


class App extends Component {
  render() {
    return (
      <div>
        
        <div className="container">
        <FormCadastro/>
        <ListPessoas/>
        </div>
      </div>
    );
  }
}

export default App;

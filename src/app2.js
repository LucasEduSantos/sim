import React, { Component } from 'react';
import receitas from './receitas.json';
import {ReceitaQuadro} from './components/receitaQuadro'
import './App.css'

class App extends Component {
  state = {
    receitas: []
  };

  componentDidMount() {
   this.setState({ receitas: receitas });
  }

  render() {
    const { receitas } = this.state;

    return (
      <section className="container">
        <div className="bah">
          <h1>Site de receitas meu</h1>
          <a href='./App.js'>clica meo</a>
        </div>
      </section>
    );
  }
}

export default App;

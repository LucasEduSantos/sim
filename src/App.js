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
        <div className="receita-grid">
          {receitas.map(receitas => (
          <ReceitaQuadro  key={receitas.id}receita={receitas}/>
        ))}
        </div>
      </section>
    );
  }
}

export default App;

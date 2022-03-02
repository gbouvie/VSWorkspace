import React, { Component } from 'react';
import Ocorrencias from './Ocorrencias';
import AddOcorrencia from './AddOcorrencia';

class App extends Component {
  state = {
    ocorrencias: [
      {id: 1, type: 'SC', dtIni: '01/04/2020', dtFim: '15/04/2020'},
      {id: 2, type: 'Red 25%', dtIni: '20/04/2020', dtFim: '29/04/2020'}
    ]
  }

  deleteOcorrencia = (id) => {
    const ocorrenciasLeft = this.state.ocorrencias.filter(ocorrencia => {
      return ocorrencia.id !== id;
    });
    this.setState({
      ocorrencias: ocorrenciasLeft
    });
  }

  addOcorrencia = (newOcorrencia) => {
    newOcorrencia.id = Math.random();
    let newOcorrencias = [...this.state.ocorrencias, newOcorrencia];
    this.setState({
      ocorrencias: newOcorrencias
    });
  }

  render() {
    return (
      <div className="estab-app container">
        <h1 className="center bluetext">Ocorrências</h1>
        <Ocorrencias ocorrencias={ this.state.ocorrencias} deleteOcorrencia={ this.deleteOcorrencia }/>
        <AddOcorrencia addOcorrencia={ this.addOcorrencia } />
      </div>
    );
  }
}

export default App;

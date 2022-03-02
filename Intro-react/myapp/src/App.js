import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Giovani', age: 38, belt: 'white', id: 1},
      {name: 'Jéssica', age: 32, belt: 'green', id: 2},
      {name: 'Sushi', age: 1, belt: 'black', id: 3}
    ]
  }

  addNinja = (newNinja) => {
    newNinja.id = Math.random();   
    let copyNinjas = [...this.state.ninjas, newNinja];
    this.setState({
      ninjas: copyNinjas
    });
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={ this.deleteNinja } ninjas={ this.state.ninjas } />
        <AddNinja addNinja={ this.addNinja } />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class AddOcorrencia extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addOcorrencia(this.state);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>Add Nova Ocorrência:</label>
          <input type="text" onChange={ this.handleChange } value={ this.state.content } />
        </form>
      </div>
    );
  }
}

export default AddOcorrencia;
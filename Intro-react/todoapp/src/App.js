import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const todosLeft = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todosLeft
    });
  }

  addTodo = (newTodo) => {
    newTodo.id = Math.random();
    let newTodos = [...this.state.todos, newTodo];
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center bluetext">Todo's</h1>
        <Todos todos={ this.state.todos} deleteTodo={ this.deleteTodo }/>
        <AddTodo addTodo={ this.addTodo } />
      </div>
    );
  }
}

export default App;

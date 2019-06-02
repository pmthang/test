import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo, toggleTodo } from "../reducers/todo";

const TodoItem = ({ id, complete, name, deleteTodo }) => (
  <li>
    <button onClick={() => deleteTodo(id)}>X</button>
    <input
      type="checkbox"
      defaultChecked={complete}
      onChange={() => toggleTodo(id)}
    />
    {name}
  </li>
);
class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              {...todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ todos: state.todos }),
  { fetchTodos, deleteTodo, toggleTodo },
)(TodoList);

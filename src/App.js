import React, { Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux'
import Hello from './Hello';
import './style.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


export default class App extends Component {
  render() {
    return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    )
  } 
}


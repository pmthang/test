import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateCurrent, saveTodo } from '../reducers/todo'
import store from '../store'

class TodoForm extends Component {
  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.updateCurrent(val)
  }
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.saveTodo(this.props.currentTodo)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} ><input type="text"
        onChange={this.handleInputChange}
        value={this.props.currentTodo}
      />
      </form>
    )
  }
}
// const mapStateToProps = (state) => ({currentTodo: state.currentTodo})
// const mapDispatchToProps= ({updateCurrent})
export default connect(
  (state) => ({ currentTodo: state.currentTodo }),
  { updateCurrent, saveTodo }
)(TodoForm)
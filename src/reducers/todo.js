import {
  getTodos,
  createTodo,
  destroyTodo,
  updateTodo,
} from "../lib/todoServices";

const initState = {
  todos: [],
  currentTodo: "",
};
export function loadTodos(todos) {
  return {
    type: "TODO_LOAD",
    payload: todos,
  };
}
export function addTodo(name) {
  return {
    type: "TODO_ADD",
    payload: name,
  };
}
export function removeTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}
export function updateCurrent(val) {
  return {
    type: "UPDATE_CURRENT",
    payload: val,
  };
}
export function replaceTodo(todo) {
  return {
    type: "REPLACE_TODO",
    payload: todo,
  };
}
export function fetchTodos() {
  return dispatch => {
    getTodos().then(todos => dispatch(loadTodos(todos)));
  };
}
export function saveTodo(name) {
  return dispatch => {
    createTodo(name).then(res => dispatch(addTodo(res)));
  };
}
export function toggleTodo(id) {
  return (dispatch, getState) => {
    const { todos } = getState().todos;
    const todo = todos.find(todo => todo.id === id);
    const toggled = { ...todo, complete: !todo.complete };
    updateTodo(toggled).then(res => dispatch(replaceTodo(res)));
  };
}

export function deleteTodo(id) {
  return dispatch => {
    destroyTodo(id).then(() => dispatch(removeTodo(id)));
  };
}

export default (state = initState, action) => {
  switch (action.type) {
    case "TODO_ADD":
      return {
        ...state,
        currentTodo: "",
        todos: state.todos.concat(action.payload),
      };
    case "TODO_LOAD":
      return { ...state, todos: action.payload };
    case "UPDATE_CURRENT":
      return { ...state, currentTodo: action.payload };
    case "REPLACE_TODO":
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload.id ? action.payload : t,
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

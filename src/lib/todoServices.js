export function getTodos() {
  return fetch('https://5ce6afee0adb8e0014a6f307.mockapi.io/todos/todos')
    .then(res => res.json())
}

export function createTodo(name) {
  return fetch('https://5ce6afee0adb8e0014a6f307.mockapi.io/todos/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({name: name, complete: false})
  }).then(res => res.json())
}

export function updateTodo(todo) {
  return fetch(`https://5ce6afee0adb8e0014a6f307.mockapi.io/todos/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(todo)
  }).then(res => res.json())
}

export function destroyTodo(id) {
  return fetch(`https://5ce6afee0adb8e0014a6f307.mockapi.io/todos/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
}
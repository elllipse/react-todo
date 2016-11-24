
export function addTodo(text) {

  return {
    type: 'ADD_TODO',
    text: text
  }

}

export function toggleTodo(id) {

  return {
    type: 'TOGGLE_TODO',
    id: id
  }

}

export function refreshStats() {

  return {
    type: 'REFRESH_STATS',
    payload: ''
  }

}

export function visibleFilter(filter) {

  return {
    type: 'FILTER_TODO',
    filter: filter
  }

}
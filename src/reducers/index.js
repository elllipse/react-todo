
const initialState = {
  visibility: 'SHOW_ALL',
  todos: [{
    text: 'get a job',
    checked: false
  }]
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {

    case 'ADD_TODO':
      return {...state,
        todos: [...state.todos, {
          text:action.text,
          checked: false
        }]
      }

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo,index)=>{
          if (index === action.id) {
            return {...todo, checked: !todo.checked}
          }
          return todo
        })
      }

    case 'FILTER_TODO':
      return {...state, visibility: action.filter}

    default:
      return state;
  }
}
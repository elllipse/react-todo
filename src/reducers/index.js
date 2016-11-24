
const initialState = {
  visibility: 'SHOW_ALL',
  todos: [{
    text: 'do something',
    checked: false
  }],
  stats: {
    done: 0,
    undone: 1,
    all: 1
  }
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

    case 'REFRESH_STATS':
      return {
        ...state,stats: {
          all: state.todos.length,

          done: (()=>{
            let count = 0;
            state.todos.map((todo)=> {
              if (todo.checked) count++;
            })
            return count;
          })(),

          undone: (()=>{
            let count = 0;
            state.todos.map((todo)=> {
              if (!todo.checked) count++;
            })
            return count;
          })()
        }
      }

    case 'FILTER_TODO':
      return {...state, visibility: action.filter}

    default:
      return state;
  }
}
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const todos = this.props.todos;
    const {toggleTodo, addTodo} = this.props.pageActions;
    //const visibility  = this.props.visibility

    const todosElems = todos.map((el,i)=>{
      let className = el.checked ? 'checked' : 'unchecked';
      return <li className={className} key={i} onClick={toggleTodo.bind(null,{i})}>{el.text}</li>
    })

    return (
      <div>
        <input type='text'/>
        <button onClick={()=>{addTodo('new ToDo!')}}>Добавить</button>
        <ul>
          {todosElems}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    visibility: state.visibility,
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

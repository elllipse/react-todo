import React, { Component } from 'react'

export default class Todos extends Component {

  constructor() {
    super()
    this.onTodoClickHandler = this.onTodoClickHandler.bind(this);
    //this.toggleTodo = props.toggleTodo.bind(this);
  }

  onTodoClickHandler(i) {
    this.props.toggleTodo(i)
    //this.props.refreshStats();
  }


  render() {
    const todosElems = this.props.todos.map((el,i)=>{
      let className = el.checked ? 'checked' : 'unchecked';
      return <li className={className} key={i} onClick={this.onTodoClickHandler.bind(null,i)}>{el.text}</li>
    })
    return (
      <ul>
        {todosElems}
      </ul>
    )
  }
}
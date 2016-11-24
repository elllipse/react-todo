import React, { Component } from 'react'

export default class Todos extends Component {

  constructor() {
    super()
    this.onTodoClickHandler = this.onTodoClickHandler.bind(this);
    //this.toggleTodo = props.toggleTodo.bind(this);
  }

  onTodoClickHandler(i) {
    this.props.toggleTodo(i);
    this.props.refreshStats();
  }


  render() {
    const todosElems = this.props.todos.map((el,i)=>{

      switch(this.props.visibility) {
        case 'SHOW_ALL':
          let className = el.checked ? 'checked' : 'unchecked';
          return <li className={className} key={i} onClick={()=>{this.onTodoClickHandler(i)}} >{el.text}</li>

        case 'SHOW_DONE':
          if (!el.checked) return;
          return <li className='checked' key={i} onClick={()=>{this.onTodoClickHandler(i)}} >{el.text}</li>

        case 'SHOW_UNDONE':
          if (el.checked) return;
          return <li key={i} onClick={()=>{this.onTodoClickHandler(i)}} >{el.text}</li>
      }

    })
    return (
      <ul>
        {todosElems}
      </ul>
    )
  }
}
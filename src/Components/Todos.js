import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Todos extends Component {

  constructor() {
    super()
    this.onTodoClickHandler = this.onTodoClickHandler.bind(this);
    this.onDeleteTodoClickHandler = this.onDeleteTodoClickHandler.bind(this);
  }

  onTodoClickHandler(i) {
    this.props.toggleTodo(i);
    this.props.refreshStats();
  }

  onDeleteTodoClickHandler(e,i) {
    e.stopPropagation();
    this.props.deleteTodo(i);
  }


  render() {
    const todosElems = this.props.todos.map((el,i)=>{

      switch(this.props.visibility) {
        case 'SHOW_ALL':
          let className = el.checked ? 'checked' : 'unchecked';
          return <li className={className} key={i} onClick={()=>{this.onTodoClickHandler(i)}} >{el.text} <span onClick={(e)=>{this.onDeleteTodoClickHandler(e,i)}} className='delete_todo'>[x]</span></li>

        case 'SHOW_DONE':
          if (!el.checked) return;
          return <li className='checked' key={i} onClick={()=>{this.onTodoClickHandler(i)}} >{el.text} <span onClick={()=>{this.onDeleteTodoClickHandler(i)}} className='delete_todo'>[x]</span></li>

        case 'SHOW_UNDONE':
          if (el.checked) return;
          return <li key={i} onClick={()=>{this.onTodoClickHandler(i)}} >{el.text} <span onClick={()=>{this.onDeleteTodoClickHandler(i)}} className='delete_todo'>[x]</span></li>
      }

    })
    return (
      <ul>
        <ReactCSSTransitionGroup
          transitionName='example'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {todosElems}
        </ReactCSSTransitionGroup>
      </ul>
    )
  }
}
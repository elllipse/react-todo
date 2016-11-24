import React, { Component } from 'react'

export default class Input extends Component {

  constructor() {
    super();
    this.onVisibilityBtnClickHandler = this.onVisibilityBtnClickHandler.bind(this);
    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

  onVisibilityBtnClickHandler(filter) {
    this.props.visibleFilter(filter);
  }

  onBtnClickHandler(e) {
    e.preventDefault();
    let input = e.target.elements[0];
    this.props.addTodo(input.value);
    this.props.refreshStats();
    input.value ='';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onBtnClickHandler}>
          <input ref='input' type='text'/>
          <button >Добавить</button>
        </form>
        <div className='visibility_btns'>
          <button onClick={()=>{this.onVisibilityBtnClickHandler('SHOW_ALL')}}>Все</button>
          <button onClick={()=>{this.onVisibilityBtnClickHandler('SHOW_DONE')}}>Выполнено</button>
          <button onClick={()=>{this.onVisibilityBtnClickHandler('SHOW_UNDONE')}}>Невыполнено</button>
        </div>
      </div>
    )
  }
}
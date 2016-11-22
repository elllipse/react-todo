import React, { Component } from 'react'

export default class Input extends Component {

  constructor() {
    super();
    this.onBtnClickHandler = this.onBtnClickHandler.bind(this)
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
      <form onSubmit={this.onBtnClickHandler}>
        <input ref='input' type='text'/>
        <button >Добавить</button>
      </form>

    )
  }
}
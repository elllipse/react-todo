import React, { Component } from 'react'

export default class Info extends Component {

  constructor() {
    super()
  }

  render() {
    let status;
    switch (this.props.filter) {
      case 'SHOW_ALL':
        status = 'Все';
        break;
      case 'SHOW_DONE':
        status = 'Выполнено';
        break;
      case 'SHOW_UNDONE':
        status = 'Невыполнено';
        break;
    }
    return (
      <div className='info'>
        <p>Всего: <span className='val'>{this.props.all}</span></p>
        <p>Завершено: <span className='val'>{this.props.done}</span></p>
        <p>Незавершено: <span className='val'>{this.props.undone}</span></p>
        <p>Отображаются: <span className='val'>{status}</span></p>
      </div>
    )
  }
}
import React, { Component } from 'react'

export default class Info extends Component {

  constructor(props) {
    super()
    this.statsObj = props.stats;
  }

  render() {
    return (
      <div className='info'>
        <p>Всего: <span className='val'>{this.statsObj.all}</span></p>
        <p>Завершено: <span className='val'>{this.statsObj.done}</span></p>
        <p>Незавершено: <span className='val'>{this.statsObj.undone}</span></p>
        <p>Отображаются: <span className='val'>ВСЕ</span></p>
      </div>
    )
  }
}
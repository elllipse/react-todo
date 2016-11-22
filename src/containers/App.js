import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Input from '../components/Input'
import Todos from '../components/Todos'
import Info from '../components/Info'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const {toggleTodo, addTodo, refreshStats} = this.props.pageActions;
    const {todos, stats} = this.props;

    //const visibility  = this.props.visibility
    return (
      <div>
        <Input addTodo={addTodo} refreshStats={refreshStats}/>
        <Info stats={stats}/>
        <Todos todos={todos} toggleTodo={toggleTodo} refreshStats={refreshStats}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    visibility: state.visibility,
    todos: state.todos,
    stats: state.stats
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

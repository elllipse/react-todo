import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Input from '../components/Input'
import Todos from '../components/Todos'
import Info from '../components/Info'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const {toggleTodo, addTodo, refreshStats, visibleFilter, deleteTodo} = this.props.pageActions;
    const {todos, stats, visibility} = this.props;


    //const visibility  = this.props.visibility
    return (
      <div>
        <Input addTodo={addTodo} refreshStats={refreshStats} visibleFilter={visibleFilter}/>
        <Info all={stats.all} done={stats.done} undone={stats.undone} filter={visibility}/>
        <Todos todos={todos} toggleTodo={toggleTodo} refreshStats={refreshStats} visibility={visibility} deleteTodo={deleteTodo}/>
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

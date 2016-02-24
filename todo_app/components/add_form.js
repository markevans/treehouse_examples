import React from 'react'

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {newValue: ''}
  }

  onChange (e) {
    this.setState({newValue: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault()
    this.action('addTodo', {title: this.state.newValue})
    this.setState({newValue: ''})
  }

  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input onChange={this.onChange.bind(this)} name="title" value={this.state.newTitle} />
        <button>Add</button>
      </form>
    )
  }
}

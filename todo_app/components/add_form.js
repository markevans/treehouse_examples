import React from 'react'

export default class AddForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {newTitle: ''}
  }

  onChange (e) {
    this.setState({newTitle: e.target.value})
  }


  onSubmit (e) {
    e.preventDefault()
    this.action('addTodo', {title: this.state.newTitle})
    this.setState({newTitle: ''}) // to reset the text field
  }

  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input autoComplete="off" onChange={this.onChange.bind(this)} name="title" value={this.state.newTitle} />
        <button>Add</button>
      </form>
    )
  }
}


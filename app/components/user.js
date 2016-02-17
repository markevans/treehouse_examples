import React from 'react'

export default class User extends React.Component {

  getInitialState () {
    return {nameValue: ''}
  }

  handleSubmit (e) {
    e.preventDefault()
    this.action('changeName', {userID: this.props.userID, name: this.state.nameValue})
    this.setState({nameValue: ''})
  }

  handleChange (e) {
    this.setState({nameValue: e.target.value})
  }

  stateFromTree () {
    return {
      user: ['users', this.props.userID]
    }
  }

  render () {
    return <li>
      {this.state.user.name}
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <input name="name" autoComplete="off" value={this.state.nameValue} onChange={this.handleChange.bind(this)}/>
      </form>
    </li>
  }

}

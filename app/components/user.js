export default class User extends treehouse.Component {

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
      message: 'message',
      users: 'users'
    }
  }

  render () {
    return <li>
      {this.state.message}
      {this.state.users.get(this.props.userID).get('name')}
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <input name="name" autoComplete="off" value={this.state.nameValue} onChange={this.handleChange.bind(this)}/>
      </form>
    </li>
  }

}

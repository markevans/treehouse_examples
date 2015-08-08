import component from "./component"

export default component({

  stateCursors: {message: 'message'},

  getInitialState () {
    return {nameValue: ''}
  },

  handleSubmit (e) {
    e.preventDefault()
    this.action('changeName', {user: this.props.user, name: this.state.nameValue})
    this.setState({nameValue: ''})
  },

  handleChange (e) {
    this.setState({nameValue: e.target.value})
  },

  componentName: 'User',

  render () {
    return <li>
      {this.props.user.get('name')}
      <form onSubmit={ this.handleSubmit }>
        <input name="name" autoComplete="off" value={this.state.nameValue} onChange={this.handleChange}/>
        Message: {this.cursors.message.get()}
      </form>
    </li>
  }

})

import component from "./component"

export default component({

  getInitialState () {
    return {nameValue: ''}
  },

  handleSubmit (e) {
    e.preventDefault()
    this.action('changeName', {user: this.props.user, name: this.state.name})
    this.setState({nameValue: ''})
  },

  handleChange (e) {
    this.setState({nameValue: e.target.value})
  },

  render () {
    return <li>
      {this.props.user.get('name')}
      <form onSubmit={ this.handleSubmit }>
        <input name="name" value={this.state.nameValue} onChange={this.handleChange}/>
      </form>
    </li>
  }

})

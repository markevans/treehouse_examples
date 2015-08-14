import component from "./component"

export default component({
  componentName: 'Message',

  stateCursors: {message: 'message'},

  onChange (e) {
    this.action('changeMessage', {text: e.target.value})
  },

  render () {
    return (
      <p>
        <form><input autoComplete="off" name="message" value={this.cursors.message.get()} onChange={this.onChange} /></form>
        {this.cursors.message.get()}
      </p>
    )
  }
})

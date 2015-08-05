import component from "./component"

export default component({
  componentName: 'Message',

  requireFromState: ['message'],

  onChange (e) {
    this.action('changeMessage', {text: e.target.value})
  },

  render () {
    return (
      <form><input name="message" value={this.appState.message.get()} onChange={this.onChange} /></form>
    )
  }
})

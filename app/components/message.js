import component from "./component"

export default component({
  componentName: 'Message',

  requireFromState: ['message'],

  render () {
    return (
      <p>{this.appState.message.get()}</p>
    )
  }
})

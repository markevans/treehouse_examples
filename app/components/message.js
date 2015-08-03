import component from "./component"

export default component({
  requireFromState: ['message'],

  render () {
    return (
      <p>{this.appState('message').get()}</p>
    )
  }
})

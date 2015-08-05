class Actions {

  constructor () {
    this.actions = {}
    this.state = null
  }

  setState (state) {
    this.state = state
  }

  registerActions (actions) {
    Object.assign(this.actions, actions)
  }

  call (name, payload={}) {
    if ( this.actions[name] ) {
      let updateState = (name, args) => {
        this.state.commit(name, args)
      }
      this.actions[name](updateState, payload)
    } else {
      console.log(`Action '${name}' not found`)
    }
  }

}

export default Actions

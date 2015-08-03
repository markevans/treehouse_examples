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
      let applyChange = (name, args) => {
        this.state.apply(name, args)
      }
      this.actions[name](applyChange, payload)
    } else {
      console.log(`Action '${name}' not found`)
    }
  }

}

export default Actions

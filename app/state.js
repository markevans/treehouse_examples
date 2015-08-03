import i from 'immutable'
import Cursor from './cursor'
global.i = i

class State {

  constructor (data = {}) {
    this.data = i.fromJS(data)
    this.updaters = {}
  }

  at (...path) {
    return new Cursor(
      path,
      () => { return this.data },
      (data) => { this.data = data }
    )
  }

  get (...path) {
    return this.at(...path).get()
  }

  p () {
    console.log(JSON.stringify(this.data))
  }

  registerUpdaters (updaters) {
    Object.assign(this.updaters, updaters)
  }

  apply (name, args) {
    let updater = this.updaters[name]
    if (updater) {
      updater(this.at(), args)
    } else {
      console.log(`No updater found with name '${name}'`)
    }
  }

}

export default State

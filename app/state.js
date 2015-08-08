import i from 'immutable'
import Cursor from './cursor'
import EventEmitter from './event_emitter'
global.I = i
global.E = EventEmitter

class State {

  constructor (data = {}) {
    this.data = i.fromJS(data)
    this.updaters = {}
    this.eventEmitter = new EventEmitter()
  }

  getData () {
    return this.data
  }

  setData (data, changePath) {
    this.data = data
    this.emitChangesToPath(changePath)
  }

  at (...path) {
    return new Cursor(path, this.getData.bind(this), this.setData.bind(this))
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
      this.eventEmitter.emit('apply', {name, args})
    } else {
      console.log(`State updater '${name}' not found`)
    }
  }

  onApply (callback) {
    return this.eventEmitter.on('apply', callback)
  }

  onChange (pathString, callback) {
    return this.eventEmitter.on(`change:${pathString}`, callback)
  }

  emitChangesToPath (p) {
    let path = p.slice(), i
    for (i = 1; i <= p.length; i++) {
      this.eventEmitter.emit(`change:${path.join('.')}`)
      path.pop()
    }
  }

}

export default State

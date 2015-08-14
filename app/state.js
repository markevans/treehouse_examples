import i from 'immutable'
import Cursor from './cursor'
import EventEmitter from './event_emitter'
global.I = i
global.E = EventEmitter

class State {

  constructor (data = {}) {
    this.data = i.fromJS(data)
    this.eventEmitter = new EventEmitter()
  }

  getData () {
    return this.data
  }

  setData (data, changePath) {
    this.data = data
    this.eventEmitter.emit('change', {path: changePath})
  }

  at (...path) {
    return new Cursor(this, path)
  }

  get (...path) {
    return this.at(...path).get()
  }

  p () {
    console.log(JSON.stringify(this.data))
  }

  commit () {
    this.eventEmitter.emit('commit')
  }

  onCommit (callback) {
    return this.eventEmitter.on('commit', callback)
  }

  onChange (callback) {
    return this.eventEmitter.on('change', callback)
  }

}

export default State

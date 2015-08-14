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
    this.emitChangesToPath(changePath)
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

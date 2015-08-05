class DirtyTracker {
  constructor () {
    this.dirtyObjects = new Set()
  }

  add (object) {
    this.dirtyObjects.add(object)
  }

  remove (object) {
    this.dirtyObjects.delete(object)
  }

  forEach (callback) {
    this.dirtyObjects.forEach(callback)
  }
}

export default DirtyTracker

import treehouse from 'treehouse'

class BaseRouter {

  constructor (treehouse) {
    this.treehouse = treehouse
    let pathMap = this.stateFromTree()
    this.multiCursor = treehouse.tree.pick(pathMap)
    window.addEventListener("hashchange", () => {
      this.doChangedAction()
    }, false)
    this.doChangedAction()
    this.treehouseWatcher = this.treehouse.watch(pathMap, (multiCursor) => {
      this.setHash(this.serialize(multiCursor.get()))
    })
  }

  doChangedAction () {
    this.treehouse.actions.do('router:urlChanged', {updateTree: this.updateTree.bind(this)})
  }

  updateTree () {
    this.multiCursor.set(this.state())
  }

  state () {
    let string = this.hash()
    return string ? this.deserialize(string) : null
  }

  hash () {
    var matches = window.location.href.match(/#(.*)$/)
    return matches ? window.decodeURI(matches[1]) : ""
  }

  setHash (hash) {
    window.location.hash = window.encodeURI(hash)
  }

  serialize (state) {
    throw new Error("serialize needs to be implemented")
  }

  deserialize (string) {
    throw new Error("deserialize needs to be implemented")
  }

}

export default BaseRouter

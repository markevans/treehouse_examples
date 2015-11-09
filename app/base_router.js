import treehouse from 'treehouse'

class BaseRouter {

  constructor () {
    window.addEventListener("hashchange", () => {
      this.doChangedAction()
    }, false)
    this.doChangedAction()
    this.watchTree()
  }

  doChangedAction () {
    this.action('router:urlChanged', {updateTree: this.updateTree.bind(this)})
  }

  updateTree () {
    let key, cursor, state = this.state()
    for (key in state) {
      cursor = this.cursors()[key]
      if (cursor) { cursor.update(state[key]) }
    }
  }

  syncWithTree () {
    this.setHash(this.serialize(this.currentTreeState()))
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

treehouse.extend(BaseRouter.prototype)

export default BaseRouter

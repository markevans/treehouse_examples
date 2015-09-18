import treehouse from 'treehouse'

class Router {

  constructor () {
    treehouse.watch(['grid'], () => {
      this.syncWithTree()
    })
    window.addEventListener("hashchange", () => {
      this.action('urlChanged', this.deserialize())
    }, false)
  }

  hash () {
    var matches = window.location.href.match(/#(.*)$/)
    return matches ? window.decodeURI(matches[1]) : ""
  }

  setHash (hash) {
    window.location.hash = window.encodeURI(hash)
  }

  serialize () {
    return JSON.stringify(this.currentTreeState())
  }

  deserialize () {
    let string = this.hash()
    if (string) {
      return JSON.parse(this.hash())
    } else {
      return null
    }
  }

}

treehouse.extend(Router.prototype)
Router.prototype.syncWithTree = function () {
  this.setHash(this.serialize())
}
Router.prototype.stateFromTree = function () {
  return {grid: 'grid'}
}


export default Router

import i from "immutable"

// "edgar.users" -> ['edgar', 'users']
let normalizePath = (path) => {
  let pathArray = []
  if (path.forEach) { // array
    path.forEach((p) => {
      pathArray = pathArray.concat(normalizePath(p))
    })
  } else { // string/number
    pathArray = pathArray.concat((''+path).split('.'))
  }
  return pathArray
}

class Cursor {
  constructor (tree, path=[]) {
    this.tree = tree
    this.path = normalizePath(path)
    this.getData = tree.getData.bind(tree)
    this.setData = tree.setData.bind(tree)
  }

  at (...path) {
    return new this.constructor(
      this.tree,
      this.path.concat(path)
    )
  }

  get (...path) {
    return this.getData().getIn(normalizePath(this.path.concat(path)))
  }

  map (callback) {
    return this.get().map( (item, i) => {
      return callback(this.at(i), i)
    })
  }

  equals (other) {
    if (other.equals) {
      return other.equals(this.get())
    } else {
      return false
    }
  }

  set (...args) {
    let pathToAttr, value
    if (args.length == 2) { // set(attr, value)
      pathToAttr = this.path.concat([args[0]])
      value = args[1]
    } else { // set(value)
      pathToAttr = this.path
      value = args[0]
    }

    let newValue,
      data = this.getData()
    if (typeof value === 'function') {
      this.setData(data.updateIn(pathToAttr, value), pathToAttr)
    } else {
      this.setData(data.updateIn(pathToAttr, () => value), pathToAttr)
    }

  }

  commit () {
    this.tree.commit()
  }

  setAndCommit (...args) {
    this.set(...args)
    this.commit()
  }
}

global.Cursor = Cursor

export default Cursor

import i from "immutable"
import c from "immutable/contrib/cursor"

global.i = i
global.c = c

// "edgar.users" -> ['edgar', 'users']
let normalizePath = (path) => {
  let pathArray = []
  if (typeof path === 'string') {
    pathArray = pathArray.concat(string.split('.'))
  } else { // array
    pathArray = pathArray.concat(path.map((p) => {
      return normalizePath(p)
    }))
  }
  return pathArray
}

class Cursor {
  constructor (path, getData, setData) {
    this.path = normalizePath(path)
    this.getData = getData
    this.setData = setData
  }

  get (path) {
    return new this.constructor(
      path,
      () => { return this.data },
      (data) => { this.data = data }
    )
  }

  update (...args) {
    let pathToAttr, value
    if (args.length == 2) { // update(attr, value)
      pathToAttr = this.path.concat([args[0]])
      value = args[1]
    } else { // update(value)
      pathToAttr = this.path
      value = args[0]
    }

    let newValue,
      data = this.getData()
    if (typeof value === 'function') {
      let currentValue = data.getIn(pathToAttr)
      newValue = value(currentValue)
    } else {
      newValue = value
    }

    this.setData(data.updateIn(pathToAttr, newValue))
  }
}
global.Cursor = Cursor

class State {

  constructor (data = {}) {
    this.data = i.fromJS(data)
    this.updaters = {}
  }

  get (path) {
    return new Cursor(
      path,
      () => { return this.data },
      (data) => { this.data = data }
    )
  }

  p () {
    console.log(JSON.stringify(this.data))
  }

  registerUpdaters (updaters) {
    Object.assign(this.updaters, updaters)
  }

}


global.stuff = new State({
  categories: [
    {
      name: 'animal',
      species: [
        {
          name: 'Mammal',
          animals: [
            {name: 'Lion'}
          ]
        }
      ]
    },
    {
      name: 'mineral'
    }
  ]
})



export default State

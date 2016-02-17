let range = (size) => {
  return Array.apply(null, Array(size))
}

export default {

  init (tree, payload) {
    let gridSize = 20
    tree.set({
      message: "",
      users: [
        {name: 'Mark'},
        {name: 'Egg'},
        {name: 'Toast'}
      ],
      grid: range(gridSize).map((row) => {
        return range(gridSize).map(cell => 0)
      })
    })
  },

  'router:urlChanged' (tree, {updateTree}) {
    updateTree()
  },

  changeMessage (tree, {text}) {
    tree.at(['message']).set(text)
  },

  changeName (tree, {userID, name}) {
    tree.at(['users', userID, 'name']).set(name)
  },

  drawCell (tree, {rowID, cellID}) {
    tree.at(['grid', rowID, cellID]).set(1)
  }

}

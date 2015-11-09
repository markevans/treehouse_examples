let range = (size) => {
  return Array.apply(null, Array(size))
}

export default {

  init (tree, payload) {
    let gridSize = 20
    tree.merge({
      message: "",
      users: [
        {name: 'Mark'},
        {name: 'Egg'},
        {name: 'Toast'}
      ],
      grid: range(gridSize).map((row) => {
        return range(gridSize).map(cell => 0)
      })
    }).commit()
  },

  'router:urlChanged' (tree, {updateTree}) {
    updateTree()
    tree.commit()
  },

  changeMessage (tree, {text}) {
    tree.set('message', text).commit()
  },

  changeName (tree, {userID, name}) {
    tree.at('users', userID).set('name', name).commit()
  },

  drawCell (tree, {rowID, cellID}) {
    tree.set(['grid', rowID, cellID], 1).commit()
  }

}

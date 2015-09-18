export default {

  init (tree, payload) {
    let gridSize = 20

    tree.set({
      message: "Change me",
      users: [
        {name: 'Mark'},
        {name: 'Egg'},
        {name: 'Toast'}
      ],
      grid: Array.apply(null, Array(gridSize)).map((row) => {
        return Array.apply(null, Array(gridSize)).map(cell => 0)
      })
    }).commit()
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

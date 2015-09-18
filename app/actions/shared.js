export default {

  init (tree, payload) {
    tree.set({
      message: "Change me",
      users: [
        {name: 'Mark'},
        {name: 'Egg'},
        {name: 'Toast'}
      ],
      grid: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]
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

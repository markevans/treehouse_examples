export default {

  init (tree, payload) {
    let gridSize = 20

    tree.set('message', "Change me")
        .set('users', [
          {name: 'Mark'},
          {name: 'Egg'},
          {name: 'Toast'}
        ])

    if (!tree.get('grid')) {
      tree.set('grid', Array.apply(null, Array(gridSize)).map((row) => {
          return Array.apply(null, Array(gridSize)).map(cell => 0)
        })
      )
    }
    tree.commit()
  },

  initFromUrl (tree, {router}) {
    let state = router.deserialize()
    if (state && state.grid) {
      tree.set('grid', state.grid).commit()
    }
  },

  urlChanged (tree, routerState) {
    tree.set('grid', routerState.grid).commit()
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

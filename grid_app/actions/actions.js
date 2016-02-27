export default {

  'router:urlChanged' (tree, {router}) {
    router.push()
  },

  changeMessage (tree, {text}) {
    tree.at('message').set(text)
  },

  changeName (tree, {userID, name}) {
    tree.at('users', userID, 'name').set(name)
  },

  drawCell (tree, {rowID, cellID}) {
    tree.at('grid', rowID, cellID).set(1)
  },

  addUser (tree) {
    tree.at('users').mutate('push', {name: 'New one'})
  }

}

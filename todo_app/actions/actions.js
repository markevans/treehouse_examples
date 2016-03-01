export default {

  addTodo (tree, {title}) {
    // Using Math.random is not ideal but this illustrates the concept
    let newTodo = {id: Math.random(), title: title, created: Date.now()}
    tree.at('items').setAttribute(newTodo.id, newTodo)
  },

  removeTodo (tree, {id}) {
    tree.at('items').delete(id)
  }

}

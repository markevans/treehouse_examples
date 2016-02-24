import todoHelpers from '../helpers/todo_helpers'

export default {

  addTodo (tree, {title}) {
    let newTodo = todoHelpers.newTodo(title)
    tree.at('items').setWith('setAttribute', newTodo.id, newTodo)
  },

  removeTodo (tree, {id}) {
    tree.at('items').setWith('delete', id)
  }

}

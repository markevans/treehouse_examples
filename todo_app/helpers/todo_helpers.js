let id = 0
let generateID = () => {
  return id++
}

export default {
  newTodo (title) {
    let id = generateID()
    return {id: id, title: title, created: Date.now()}
  }
}

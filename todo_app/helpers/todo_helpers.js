let id = 0
let generateID = () => {
  return id++
}

export default {
  newTodo (title) {
    return {id: generateID(), title: title, created: Date.now()}
  }
}

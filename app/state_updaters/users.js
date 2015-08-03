export default {

  changeName (state, {user, name}) {
    debugger
    user.update('name', name)
  }

}

export default {

  changeName (state, {user, name}) {
    user.update('name', name)
  }

}

import i from 'immutable'

export default {

  init (state, payload, commit) {
    state.set(i.fromJS({
      message: "Change me",
      users: [
        {name: 'Mark'},
        {name: 'Egg'},
        {name: 'Toast'}
      ]
    }))
    commit()
  },

  changeMessage (state, {text}, commit) {
    state.set('message', text)
    commit()
  },

  changeName (state, {user, name}, commit) {
    user.set('name', name)
    commit()
  },

}

import i from 'immutable'

export default {

  init (state) {
    state.set(i.fromJS({
      message: "Change me",
      users: [
        {name: 'Mark'},
        {name: 'Egg'},
        {name: 'Toast'}
      ]
    }))
  },

  changeName (state, {user, name}) {
    user.set('name', name)
  },

  changeMessage (state, {text}) {
    state.set('message', text)
  }

}

export default {

  init (state, payload) {
    state.set({
      message: "Change me",
      users: [
        {name: 'Mark'},
        {name: 'Egg'},
        {name: 'Toast'}
      ],
      preferences: {
        network: {
          timestamp: Date()
        }
      }
    }).commit()
  },

  changeMessage (state, {text}) {
    state.set('message', text).commit()
  },

  changeName (state, {userID, name}) {
    state.at('users', userID).set('name', name).commit()
  }

}

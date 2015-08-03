import i from 'immutable'

export default {

  init (state) {
    state.update(i.fromJS({
      message: "I don't have a message yet",
      users: [
        {name: 'Mark'},
        {name: 'Egg'},
        {name: 'Toast'}
      ]
    }))
  }

}

import i from 'immutable'

export default {

  init (state) {
    state.update(i.fromJS({
      message: "Change me",
      users: [
        {name: 'Mark'},
        {name: 'Egg'},
        {name: 'Toast'}
      ]
    }))
  }

}

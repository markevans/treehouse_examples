import i from 'immutable'

export default {

  init (state) {
    state.update(i.fromJS({
      users: [
        {name: 'Mark'},
        {name: 'Egg'},
        {name: 'Toast'}
      ]
    }))
  }

}

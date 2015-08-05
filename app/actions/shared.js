export default {

  changeMessage (state, {text}) {
    state.apply('changeMessage', {text})
  },

  changeName (state, {user, name}) {
    state.apply('changeName', {user, name})
  },

}

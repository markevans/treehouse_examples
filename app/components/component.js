require('../polyfill')
import React from 'react'

let state, actions

let component = (spec) => {
  return React.createClass(Object.assign({

    appState (...path) {
      return state.at(...path)
    },

    action (name, payload) {
      actions.call(name, payload)
    }

  }, spec))
}

component.setAppState = (s) => { state = s }
component.setActions = (a) => { actions = a }

export default component

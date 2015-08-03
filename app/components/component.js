require('../polyfill')
import React from 'react'

let state, actions

let areEqual = (var1, var2) => {
  if ( var1.equals ) {
    return var1.equals(var2)
  } else {
    return var1 == var2
  }
}

// assumes objects are the same length
let elementsAreEqual = (obj1, obj2) => {
  let key
  for ( key in obj1 ) {
    if ( !areEqual(obj1[key], obj2[key]) ) {
      return false
    }
  }
  return true
}

let component = (spec) => {
  return React.createClass(Object.assign({

    requireFromState: [],

    nextAppState () {
      return this.requireFromState.reduce((obj, dep) => {
        obj[dep] = state.get(dep)
        return obj
      }, {})
    },

    componentWillMount () {
      this.appState = this.nextAppState()
    },

    componentWillUpdate () {
      this.appState = this.nextAppState()
    },

    shouldComponentUpdate (nextProps, nextState) {
      return !elementsAreEqual(this.state, nextState) ||
        !elementsAreEqual(this.props, nextProps) ||
        !elementsAreEqual(this.appState, this.nextAppState())
    },

    action (name, payload) {
      actions.call(name, payload)
    }

  }, spec))
}

component.setAppState = (s) => { state = s }
component.setActions = (a) => { actions = a }

export default component

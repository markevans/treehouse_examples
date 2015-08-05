require('../polyfill')
import React from 'react'

let state, actions, dirtyTracker

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

    appStateCursors () {
      return this.requireFromState.reduce((obj, dep) => {
        obj[dep] = state.at(dep)
        return obj
      }, {})
    },

    appStateData () {
      let key, data = {}
      for (key in this.appState) {
        data[key] = this.appState[key].get()
      }
      return data
    },

    componentWillMount () {
      this.appState = this.appStateCursors()
      this.currentAppStateData = this.appStateData()
      this.subscribeToState()
    },

    shouldComponentUpdate (nextProps, nextState) {
      return !elementsAreEqual(this.state, nextState) ||
        !elementsAreEqual(this.props, nextProps) ||
        !elementsAreEqual(this.currentAppStateData, this.appStateData())
    },

    componentWillUpdate () {
      this.currentAppStateData = this.appStateData()
      console.log('Updating', this.componentName, this._reactInternalInstance._rootNodeID)
    },

    componentDidUpdate () {
      dirtyTracker.remove(this)
    },

    componentWillUnmount () {
      this.unsubscribeToState()
      dirtyTracker.remove(this)
    },

    subscribeToState () {
      this.subscriptions = []
      this.requireFromState.forEach((path) => {
        state.onUpdate(path, () => {
          dirtyTracker.add(this)
        })
      })
    },

    unsubscribeToState () {
      this.subscriptions.forEach(s => s.unsubscribe())
    },

    //--------------------------------------------------

    action (name, payload) {
      actions.call(name, payload)
    }

  }, spec))
}

component.setAppState = (s) => { state = s }
component.setActions = (a) => { actions = a }
component.setDirtyTracker = (d) => { dirtyTracker = d }

export default component

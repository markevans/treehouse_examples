require('./polyfill')

import React from 'react'
global.React = React

import App from './components/app'
import State from './state'
import Actions from './actions'
import DirtyTracker from './dirty_tracker'
import component from './components/component'

let state = new State()
state.registerUpdaters(require('./state_updaters/init'))
state.registerUpdaters(require('./state_updaters/users'))
state.registerUpdaters(require('./state_updaters/message'))
component.setAppState(state)
global.state = state

let actions = new Actions()
actions.setState(state)
actions.registerActions(require('./actions/users'))
actions.registerActions(require('./actions/message'))
component.setActions(actions)
global.actions = actions

let dirtyTracker = new DirtyTracker()
component.setDirtyTracker(dirtyTracker)
state.onCommit(({name, args}) => {
  dirtyTracker.forEach( (component) => {
    component.forceUpdate()
  })
})
global.dirtyTracker = dirtyTracker

state.commit('init')
React.render(<App/>, document.body)

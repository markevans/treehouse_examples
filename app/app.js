require('./polyfill')

import React from 'react'
global.React = React

import App from './components/app'
import State from './state'
import Actions from './actions'
import DirtyTracker from './dirty_tracker'
import component from './components/component'

let state = new State()
state.registerUpdaters(require('./state_updaters/shared'))
component.setAppState(state)
global.state = state

let actions = new Actions()
actions.setState(state)
actions.registerActions(require('./actions/shared'))
component.setActions(actions)
global.actions = actions

let dirtyTracker = new DirtyTracker()
component.setDirtyTracker(dirtyTracker)
state.onApply(({name, args}) => {
  dirtyTracker.forEach( (component) => {
    component.forceUpdate()
  })
})
global.dirtyTracker = dirtyTracker

state.apply('init')
React.render(<App/>, document.body)

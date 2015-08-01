require('./polyfill')

import React from 'react'
import App from './components/app'

import State from './state'
let state = new State()
state.registerUpdaters(require('./state_updaters/init'))
global.state = state

state.apply('init')
React.render(<App/>, document.body)

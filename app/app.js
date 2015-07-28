import React from 'react'
import List from './components/list'
import events from './events'

global.events = events

let state = {
  users: [
    {name: 'Mark'},
    {name: 'Egg'},
    {name: 'Toast'}
  ]
}

React.render(
  <List users={state.users}/>,
  document.body
)

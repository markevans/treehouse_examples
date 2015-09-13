import React from 'react'
import List from './list'
import Message from './message'
import NetworkPreferences from './network_preferences'
import Preferences from './preferences'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Message/>
        <List/>
        <NetworkPreferences/>
        <Preferences/>
      </div>
    )
  }
}

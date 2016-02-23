import React from 'react'
import List from './list'
import Message from './message'
import Grid from './grid'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Message/>
        <List/>
        <Grid/>
      </div>
    )
  }
}

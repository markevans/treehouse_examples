import React from 'react'
import AddForm from './add_form'
import List from './list'

export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <AddForm/>
        <List/>
      </div>
    )
  }
}

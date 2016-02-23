import React from 'react'

export default class App extends React.Component {
  treehouseState (t) {
    return {
      message: t.at('message')
    }
  }

  render () {
    return (
      <div>
        Hello {this.state.message}
      </div>
    )
  }
}

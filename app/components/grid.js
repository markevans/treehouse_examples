import React from 'react'
import Row from './row'

export default class Grid extends React.Component {
  stateFromTree () {
    return {grid: 'grid'}
  }

  render () {
    return (
      <table>
        {this.state.grid.map((row, i) => {
          return <Row key={i} rowID={i}/>
        })}
      </table>
    )
  }
}
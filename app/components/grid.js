import React from 'react'
import Row from './row'

export default class Grid extends React.Component {
  treehouseState (t) {
    return {grid: t.at('grid')}
  }

  render () {
    return (
      <table cellSpacing={0}>
        {this.state.grid.map((row, i) => {
          return <Row key={i} rowID={i}/>
        })}
      </table>
    )
  }
}

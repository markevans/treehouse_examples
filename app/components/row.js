import React from 'react'
import Cell from './cell'

export default class Row extends React.Component {
  treehouseState (t) {
    return {row: t.at('grid', this.props.rowID)}
  }

  render () {
    return (
      <tr>
        {this.state.row.map((row, j) => {
          return <Cell key={j} rowID={this.props.rowID} cellID={j}/>
        })}
      </tr>
    )
  }
}

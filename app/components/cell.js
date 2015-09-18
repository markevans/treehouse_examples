import React from 'react'

export default class Cell extends React.Component {
  stateFromTree () {
    return {cell: ['grid', this.props.rowID, this.props.cellID]}
  }

  handleMouseOver () {
    this.action('drawCell', {rowID: this.props.rowID, cellID: this.props.cellID})
  }

  render () {
    return (
      <td style={{width: 20, height: 20, border: '1px solid black', background: (this.state.cell ? 'red' : 'white')}} onMouseOver={this.handleMouseOver.bind(this)}>
      </td>
    )
  }
}

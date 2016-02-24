import React from 'react'

export default class Item extends React.Component {
  treehouseState (t) {
    return {
      item: t.at('items', this.props.itemID)
    }
  }

  handleDelete () {
    this.action('removeTodo', {id: this.props.itemID})
  }

  render () {
    return (
      <li>
        {this.state.item.title}
        <a onClick={this.handleDelete.bind(this)}> X</a>
      </li>
    )
  }
}

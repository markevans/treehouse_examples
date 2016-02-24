import React from 'react'
import Item from './item'

export default class List extends React.Component {
  treehouseState (t) {
    return {
      items: t.query('itemsByRecent')
    }
  }

  render () {
    return (
      <ul className="list">
        {this.state.items.map((item) => {
          return <Item itemID={item.id} key={item.id}/>
        })}
      </ul>
    )
  }
}

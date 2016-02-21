import React from 'react'
import User from "./user"

export default class List extends React.Component{
  treehouseState (t) {
    return {users: t.at('users')}
  }

  addUser () {
    this.action('addUser')
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.users.map( (user, i) => {
            return <User userID={i} key={i} />
          })}
        </ul>
        <button onClick={this.addUser.bind(this)}>Add one</button>
      </div>
    )
  }
}

import React from 'react'
import User from "./user"

export default class List extends React.Component{
  stateFromTree () {
    return {users: ['users']}
  }

  render () {
    return (
      <ul>
        {this.state.users.map( (user, i) => {
          return <User userID={i} key={i} />
        })}
      </ul>
    )
  }
}

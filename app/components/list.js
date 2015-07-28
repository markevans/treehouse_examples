import React from "react"
import User from "./user"

export default React.createClass({
  render () {
    return (
      <ul>
        {this.props.users.map((user)=>{ return <User user={user} />})}
      </ul>
    )
  }
})

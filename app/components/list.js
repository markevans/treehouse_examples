import User from "./user"

export default class List extends treehouse.Component{
  stateFromTree () {
    return {users: 'users'}
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

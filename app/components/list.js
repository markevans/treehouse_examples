import component from "./component"
import User from "./user"

export default component({
  requireFromState: ['users'],

  render () {
    return (
      <ul>
        {this.appState.users.map( (user, i) => {
          return <User user={user} key={i} />
        })}
      </ul>
    )
  }
})

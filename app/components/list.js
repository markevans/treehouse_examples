import component from "./component"
import User from "./user"

export default component({
  componentName: 'List',

  stateCursors: {users: 'users'},

  render () {
    return (
      <ul>
        {this.cursors.users.map( (user, i) => {
          return <User user={user} key={i} />
        })}
      </ul>
    )
  }
})

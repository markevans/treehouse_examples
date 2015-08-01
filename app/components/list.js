import component from "./component"
import User from "./user"

export default component({
  render () {
    return (
      <ul>
        {this.props.users.map((user)=>{ return <User user={user} />})}
      </ul>
    )
  }
})

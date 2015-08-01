import component from "./component"

export default component({
  render () {
    return <li>
      {this.props.user.name}
    </li>
  }
})

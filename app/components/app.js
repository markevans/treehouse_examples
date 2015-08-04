import component from "./component"
import List from './list'
import Message from './message'

export default component({
  componentName: 'App',

  render () {
    return (
      <div>
        <Message/>
        <List/>
      </div>
    )
  }
})

import component from "./component"
import List from './list'
import Message from './message'
import NetworkPreferences from './network_preferences'
import Preferences from './preferences'

export default component({
  componentName: 'App',

  render () {
    return (
      <div>
        <Message/>
        <List/>
        <NetworkPreferences/>
        <Preferences/>
      </div>
    )
  }
})

export default class NetworkPreferences extends treehouse.Component {

  stateFromTree () {
    return {netPrefs: 'preferences.network'}
  }

  render () {
    return <div>
      Network Preferences
      {this.state.netPrefs.get('timestamp').match(/\d\d:\d\d:\d\d/)[0]}
    </div>
  }

}

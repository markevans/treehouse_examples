export default class Preferences extends treehouse.Component {

  stateFromTree () {
    return {preferences: 'preferences'}
  }

  render () {
    return <div>
      Preferences
      {this.state.preferences.get('network').get('timestamp').match(/\d\d:\d\d:\d\d/)[0]}
    </div>
  }

}

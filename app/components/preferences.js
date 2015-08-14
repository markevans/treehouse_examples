import component from "./component"

export default component({

  stateCursors: {
    preferences: 'preferences'
  },

  componentName: 'Preferences',

  render () {
    return <div>
      Preferences 
      {this.cursors.preferences.get('network.timestamp').match(/\d\d:\d\d:\d\d/)[0]}
    </div>
  }

})

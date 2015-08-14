import component from "./component"

export default component({

  stateCursors: {
    netPrefs: 'preferences.network'
  },

  componentName: 'NetworkPreferences',

  render () {
    return <div>
      Network Preferences 
      {this.cursors.netPrefs.get('timestamp').match(/\d\d:\d\d:\d\d/)[0]}
    </div>
  }

})

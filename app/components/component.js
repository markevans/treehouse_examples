require('../polyfill')
import React from 'react'

let appState

// export setAppState (state) => {
//   appState = state
// }

export default (spec) => {
  return React.createClass(Object.assign({

    childContextTypes: {
      message: React.PropTypes.string
    },

    contextTypes: {
      message: React.PropTypes.string
    },

    getChildContext () {
      return {message: "STATE IS HERE!"}
    },

    componentWillMount () {
      //console.log(this.compName, 'componentWillMount')
      dependencies.add(this, 'time')
    },

    componentDidMount () {
      //console.log(this.compName, 'componentDidMount')
    },

    componentWillReceiveProps () {
      //console.log(this.compName, 'componentWillReceiveProps')
    },

    shouldComponentUpdate () {
      return true
      var ret
      if (this.deps.indexOf('time') > -1) {
        ret = true
      } else {
        ret = false
      }
      console.log(this.compName, 'shouldComponentUpdate', ret)
      return ret
    },

    updateComponent () {
      console.log("HERE")
    },

    componentWillUpdate () {
      console.log(this.compName, 'componentWillUpdate')
    },

    componentDidUpdate () {
      //console.log(this.compName, 'componentDidUpdate')
    },

    componentWillUnmount () {
      //console.log(this.compName, 'componentWillUnmount')
      dependencies.remove(this, 'time')
    },

    time () {
      var d = new Date()
      return d.getMinutes() + ':' + d.getSeconds()
    },

    info () {
      //console.log(this.compName, "RENDER", this._reactInternalInstance._rootNodeID)
    }

  }, spec))
}


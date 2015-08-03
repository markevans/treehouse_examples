require('./polyfill')

import React from 'react'
import App from './components/app'

import State from './state'
let state = new State()
state.registerUpdaters(require('./state_updaters/init'))

global.state = state
global.React = React

state.apply('init')

import component from './components/component'

global.X = component({
  deps: ['time'],
  compName: 'X',
  render () {
    this.info()
    return <div>
      X {this.time()} {this._reactInternalInstance._rootNodeID}
    </div>
  }
})

global.D = component({
  deps: ['time'],
  compName: 'D',
  render () {
    this.info()
    return <div>
      D {this.time()} {this._reactInternalInstance._rootNodeID}
    </div>
  }
})

global.C = component({
  deps: [],
  compName: 'C',
  render () {
    this.info()
    return <div>
      C {this._reactInternalInstance._rootNodeID}
      {[1,2,3].map( (i) => {
        return <X key={i}/>
      })}
    </div>
  }
})

global.B = component({
  deps: [],
  compName: 'B',
  render () {
    this.info()
    return <div>
      B {this._reactInternalInstance._rootNodeID}
      <X/>
      <C/>
    </div>
  }
})

global.A = component({
  deps: ['time'],
  compName: 'A',
  render () {
    this.info()
    return <div>
      A {this.time()} {this._reactInternalInstance._rootNodeID}
      <X/>
      <B/>
    </div>
  }
})

class Dependencies {
  constructor () {
    this.lookup = {}
  }

  add (component, stateAttr) {
    if (!this.lookup[stateAttr]) this.lookup[stateAttr] = new Set()
    this.lookup[stateAttr].add(component)
  }

  remove(component, stateAttr) {
    this.lookup[stateAttr].remove(component)
  }

  eachDirtyComponent (callback) {
    for (let attr in this.lookup) {
      this.lookup[attr].forEach((component) => {
        callback(component)
      })
    }
  }
}
global.dependencies = new Dependencies()

React.render(<A/>, document.body)
global.update = function () {
  React.render(React.createElement(A), document.body)
  // dependencies.eachDirtyComponent((component) => {
  //   component.setState({})
  // })
}

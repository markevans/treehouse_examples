import React from 'react'
import treehouse from 'treehouse'
import App from './components/app'
import Router from './router'
global.treehouse = treehouse

treehouse.extendReact(React.Component.prototype)
treehouse.actions.register(require('./actions/shared'))

let gridSize = 20
let range = (size) => {
  return Array.apply(null, Array(size))
}
treehouse.init({
  message: "",
  users: [
    {name: 'Mark'},
    {name: 'Egg'},
    {name: 'Toast'}
  ],
  grid: range(gridSize).map((row) => {
    return range(gridSize).map(cell => 0)
  })
})

let router = new Router(treehouse)
React.render(<App/>, document.body)

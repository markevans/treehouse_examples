import React from 'react'
import treehouse from 'treehouse'
import App from './components/app'
import Router from './router'
global.treehouse = treehouse

treehouse.extendReact(React.Component.prototype)
treehouse.registerActions(require('./actions/actions'))
treehouse.registerFilters(require('./filters/filters'))
treehouse.registerQueries(require('./queries/queries'))
treehouse.registerMutators(require('./mutators/array'))

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

// Render into DOM
import ReactDOM from 'react-dom'
ReactDOM.render(<App/>, document.getElementById('app'))

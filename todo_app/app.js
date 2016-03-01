import treehouse from 'treehouse'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

export default () => {
  treehouse.init({
    items: {
      id1: {title: 'Run home', id: 'id1', created: Date.now()},
      id2: {title: 'Wash up', id: 'id2', created: Date.now()},
      id3: {title: 'Solve Quantum Gravity', id: 'id3', created: Date.now()}
    }
  })

  treehouse.registerActions(require('./actions/actions'))
  treehouse.registerQueries(require('./queries/queries'))
  treehouse.registerFilters(require('./filters/filters'))

  treehouse.extendReact(React.Component.prototype)
  ReactDOM.render(<App/>, document.getElementById('app'))
}

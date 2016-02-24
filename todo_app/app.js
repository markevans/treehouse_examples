import React from 'react'
import ReactDOM from 'react-dom'
import treehouse from 'treehouse'
import App from './components/app'
global.treehouse = treehouse

treehouse.extendReact(React.Component.prototype)
treehouse.registerActions(require('./actions/actions'))
treehouse.registerFilters(require('./filters/filters'))
treehouse.registerQueries(require('./queries/queries'))
treehouse.registerMutators(require('./mutators/mutators'))

treehouse.init({
  items: {
    id1: {title: 'Run home', id: 'id1', created: Date.now()},
    id2: {title: 'Wash up', id: 'id2', created: Date.now()},
    id3: {title: 'Solve Quantum Gravity', id: 'id3', created: Date.now()}
  }
})

ReactDOM.render(<App/>, document.getElementById('app'))

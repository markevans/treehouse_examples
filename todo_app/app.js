import React from 'react'
import treehouse from 'treehouse'
import App from './components/app'
global.treehouse = treehouse

treehouse.extendReact(React.Component.prototype)
treehouse.registerActions(require('./actions/actions'))
treehouse.registerFilters(require('./filters/filters'))
treehouse.registerQueries(require('./queries/queries'))
treehouse.registerMutators(require('./mutators/mutators'))

treehouse.init({
  message: 'TODO app'
})

React.render(<App/>, document.body)

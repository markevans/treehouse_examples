import React from 'react'
import treehouse from 'treehouse'
import App from './components/app'

treehouse.extendReact(React.Component.prototype)
treehouse.actions.register(require('./actions/shared'))
treehouse.actions.do('init')
React.render(<App/>, document.body)

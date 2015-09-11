import React from 'react'
global.React = React
import App from './components/app'

treehouse.actions.register(require('./actions/shared'))
treehouse.actions.do('init')
React.render(<App/>, document.body)

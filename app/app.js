import React from 'react'
import treehouse from 'treehouse'
import App from './components/app'
import Router from './router'
import immutable from 'immutable'
global.i = immutable

treehouse.extendReact(React.Component.prototype)
treehouse.actions.register(require('./actions/shared'))

let router = new Router()

treehouse.actions.do('init')
React.render(<App/>, document.body)

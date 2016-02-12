import React from 'react'
import treehouse from 'treehouse'
import App from './components/app'
import Router from './router'
//import immutable from 'immutable'
//global.i = immutable
global.treehouse = treehouse

treehouse.extendReact(React.Component.prototype)
treehouse.actions.register(require('./actions/shared'))

treehouse.actions.do('init')
let router = new Router(treehouse)
React.render(<App/>, document.body)

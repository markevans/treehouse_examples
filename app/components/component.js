require('../polyfill')
import React from 'react'

export default (spec) => {
  return React.createClass(Object.assign({

    appState () {
      return 3
    }

  }, spec))
}


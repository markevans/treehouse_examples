import React from 'react'

export default class Message extends React.Component {
  stateFromTree () {
    return {message: 'message'}
  }

  onChange (e) {
    this.action('changeMessage', {text: e.target.value})
  }

  render () {
    return (
      <p>
        <form><input autoComplete="off" name="message" value={this.state.message} onChange={this.onChange.bind(this)} /></form>
        {this.state.message}
      </p>
    )
  }
}

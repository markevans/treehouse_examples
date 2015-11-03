import BaseRouter from './base_router'

export default class Router extends BaseRouter {

  serialize (state) {
    return JSON.stringify(state)
  }

  deserialize (string) {
    return JSON.parse(string)
  }

  stateFromTree () {
    return {m: 'message'}
  }

}
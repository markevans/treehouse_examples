import treehouse from 'treehouse'

// Initialize state tree
treehouse.init({
  // Storing collections of objects keyed by ID is a REALLY GOOD IDEA!
  // Turning it into an array is super-easy with a "query" (see below)
  items: {
    id1: {title: 'Run home', id: 'id1', created: Date.now()},
    id2: {title: 'Wash up', id: 'id2', created: Date.now()},
    id3: {title: 'Solve Quantum Gravity', id: 'id3', created: Date.now()}
  }
})

// React Components
import React from 'react'
treehouse.extendReact(React.Component.prototype)

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <AddForm/>
        <List/>
      </div>
    )
  }
}

class AddForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {newTitle: ''}
  }

  onChange (e) {
    this.setState({newTitle: e.target.value})
  }


  onSubmit (e) {
    e.preventDefault()

    // this.action is given by the treehouse extension
    // It's very simple - this.action('actionName', {some: 'payload'})
    // does the registered (see below) action "actionName", passing in the payload
    this.action('addTodo', {title: this.state.newTitle})

    this.setState({newTitle: ''}) // to reset the text field
  }

  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input autoComplete="off" onChange={this.onChange.bind(this)} name="title" value={this.state.newTitle} />
        <button>Add</button>
      </form>
    )
  }
}

class List extends React.Component {

  // treehouseState tells treehouse which parts of the tree this component
  // cares about. Each item declared will be added to this.state
  // Cursors (pointers) to a path on the tree are declared with
  //     t.at('some', 'path')
  // and pre-registered (see below) queries are declared with
  //     t.query('queryName', {some: 'args'})
  treehouseState (t) {
    return {
      items: t.query('itemsByRecent')
    }
  }

  render () {
    return (
      <ul className="list">
        {this.state.items.map((item) => {
          return <Item itemID={item.id} key={item.id}/>
        })}
      </ul>
    )
  }
}

class Item extends React.Component {
  treehouseState (t) {
    return {
      item: t.at('items', this.props.itemID) // cursor to path ['items', itemID]
    }
  }

  handleDelete () {
    this.action('removeTodo', {id: this.props.itemID})
  }

  render () {
    return (
      <li>
        {this.state.item.title}
        <a onClick={this.handleDelete.bind(this)}> X</a>
      </li>
    )
  }
}

// Actions
treehouse.registerActions({

  // Each action's main job is to update the state tree.
  // As the tree is immutable, the entire tree needs to be changed each time.
  // The easiest way to do this is using cursors, e.g. tree.at('some', 'path')
  // Then use set
  //     tree.at('some', 'path').set(newValue)
  // Or with a function
  //     tree.at('some', 'path').set(oldValue => oldValue*2)
  //
  // The tree itself should not be changed, so you need to return a NEW OBJECT
  //
  // "mutators" (functions that return a NEW modified object, see below)
  // can be used by setting with a callback
  //     tree.at('some', 'path').set((oldValue, mutators) => {
  //       return mutators.push(oldValue, 5)
  //     })
  // Or use the "setWith" convenience method
  //     tree.at('some', 'path').setWith('push', 5)

  addTodo (tree, {title}) {
    // Using Math.random is not ideal but this illustrates the concept
    let newTodo = {id: Math.random(), title: title, created: Date.now()}
    tree.at('items').setWith('setAttribute', newTodo.id, newTodo)
  },

  removeTodo (tree, {id}) {
    tree.at('items').setWith('delete', id)
  }

})

// Queries

// Queries query the tree and return data. They are automatically cached,
// and only change when any parts of the tree it cares about are changed.

treehouse.registerQueries({

  itemsByRecent: {
    deps: (t) => { // Declare dependencies, uses same syntax as treehouseState()
      return {
        items: t.at('items').filter('values')  // Uses a registered filter
      }                                        // (see below)
    },
    get: ({items}) => {
      return items.sort((a, b) => {
        return a.created < b.created
      })
    }
  }

})

// Filters

// Cursors, e.g. treehouse.at('some', 'path') and queries, e.g.
// treehouse.query('someQuery', {some: 'args'}) can be streamed through a
// filter, e.g.
//     treehouse.at('some', 'path').filter('orderBy', {key: 'date'})
// Registering one is very easy - just give a function that takes data and
// returns the filtered data, e.g.
//    orderBy: (array, args) => {
//     ...return new ordered array
//    }

treehouse.registerFilters({

  // "values" filter returns the values of an object as an array
  values (object) {
    let values = []
    for (let key in object) {
      values.push(object[key])
    }
    return values
  }

})

// Render into DOM
import ReactDOM from 'react-dom'
ReactDOM.render(<App/>, document.getElementById('app'))

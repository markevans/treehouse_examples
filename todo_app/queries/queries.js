export default {

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

}

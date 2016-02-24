export default {
  itemsByRecent: {
    deps: (t) => {
      return {
        items: t.at('items').filter('values')
      }
    },
    get: ({items}) => {
      return items.sort((a, b) => {
        return a.created < b.created
      })
    }
  }
}

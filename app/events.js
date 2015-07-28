let channels = {}

let channel = (eventName) => {
  if (!channels[eventName]) channels[eventName] = []
  return channels[eventName]
}

export default {
  on (eventName, callback) {
    channel(eventName).push(callback)
  },

  emit (eventName, payload) {
    channel(eventName).forEach(cb => cb(payload))
  }
}

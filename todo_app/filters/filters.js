export default {

  // "values" filter returns the values of an object as an array
  values (object) {
    let values = []
    for (let key in object) {
      values.push(object[key])
    }
    return values
  }

}

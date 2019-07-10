/**
 * object convert to query string
 * @param queryObject
 * @returns {*}
 */
export function stringify (queryObject) {
  if (!queryObject) {
    return ''
  }

  let queryArr = []
  for (var key in queryObject) {
    queryArr.push(key + '=' + queryObject[key])
  }
  return queryArr.join('&')
}

/**
 * queryString to Object
 * @param queryString
 * @returns {{}}
 */
export function parse (queryString) {
  if (!queryString) {
    return {}
  }

  var rObj = {}
  let queryArr = []
  queryString.split('&').map(function (query) {
    queryArr = query.split('=')

    if (queryArr.length === 2) {
      rObj[queryArr[0]] = queryArr[1]
    }
  })

  return rObj
}

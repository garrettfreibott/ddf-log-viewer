module.exports = function (filters, logs) {
  var level = filters.level || 'ALL'
  var fields = Object.keys(filters).filter(function (field) {
    return field !== 'level' && filters[field] !== ''
  })

  return logs.filter(function (entry) {
    return level === 'ALL' || entry.level === level
  }).filter(function (entry) {
    return fields.reduce(function (match, field) {
      return entry[field].toLowerCase()
        .match(new RegExp(filters[field], 'i')) && match
    }, true)
  })
}

exports.filter = function (filter) {
  return {
    type: 'FILTER_LOGS',
    filter: filter
  }
}

exports.toggle = function () {
  return {
    type: 'TOGGLE_LOGS'
  }
}

exports.append = function (entry) {
  return {
    type: 'APPEND_LOGS',
    entry: entry
  }
}

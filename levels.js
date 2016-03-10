var c = require('color')

var levels = {
  ERROR: 'red',
  INFO: 'white',
  WARN: 'yellow',
  TRACE: 'blue',
  DEBUG: '#0f0'
}

module.exports = function (level) {
  if (level !== undefined) {
    return c(levels[level]).lighten(0.9).hslString()
  }

  return ['ALL'].concat(Object.keys(levels))
}

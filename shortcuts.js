var key = require('keymaster')
var actions = require('./actions')

module.exports = function (dispatch) {
  key('t', function () {
    dispatch(actions.toggle())
  })
}

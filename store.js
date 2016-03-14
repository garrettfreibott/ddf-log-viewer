var redux = require('redux')

var reducer = require('./reducer')
var actions = require('./actions')
var shortcuts = require('./shortcuts')
var random = require('./random-entry')

var store = redux.createStore(reducer)

for (var i = 0; i < 50; i++) {
  store.dispatch(actions.append(random()))
}

store.subscribe(function () {
  console.log(store.getState())
})

shortcuts(store.dispatch)

module.exports = store

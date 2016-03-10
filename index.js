var dom = require('react-dom')
var React = require('react')
var redux = require('redux')

var reducer = require('./reducer')
var actions = require('./actions')
var LogPanel = require('./log-panel')

var random = require('./random-entry')

var render = function (data) {
  var state = window.store.getState()

  dom.render(
    <LogPanel state={state} dispatch={window.store.dispatch} />,
    document.getElementById('root'))
}

var log = function () {
  console.log(window.store.getState())
}

if (!window.isInit) {
  var store = window.store = redux.createStore(reducer)
  store.subscribe(render)

  for (var i = 0; i < 50; i++) {
    store.dispatch(actions.append(random()))
  }

  store.subscribe(log)
  window.isInit = true
}

render()

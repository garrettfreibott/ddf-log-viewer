var dom = require('react-dom')
var React = require('react')

var store = require('./store')
var LogPanel = require('./log-panel')

var render = function (data) {
  dom.render(
    <LogPanel state={store.getState()} dispatch={store.dispatch} />,
    document.getElementById('root'))
}

render()
store.subscribe(render)

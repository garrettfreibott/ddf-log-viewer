var data = []

var dom = require('react-dom')
var React = require('react')
var redux = require('redux')
var random = require('random-item')

var reducer = require('./reducer')
var actions = require('./actions')
var log = require('./log-viewer')
var selector = require('./level-selector')

var store = redux.createStore(reducer)

var render = function (data) {
	var state = store.getState()
	console.log(state)

	dom.render(
		<div>
			{selector(state, store.dispatch)}
			{log.viewer(state, store.dispatch)}
		</div>,
		document.getElementById('root'))
}

store.subscribe(render)

render()

if (!window.isInit) {
	setInterval(function () {
		var level = random(log.levels().slice(1))

		store.dispatch(actions.append({
			"time": (new Date()).toISOString(),
			"level": level,
			"bundle": "Words Bundle",
			"app": "Word Printer App",
			"message": "Too Many Words To Display"
		}))

	}, 1000)
	
	window.isInit = true
}

var log = require('./log-viewer')
var React = require('react')
var actions = require('./actions')

var logOption = function (selected) {
	return function (level) {
		if (level === selected) {
			return <option value={level} selected>{level}</option>
		} else {
			return <option value={level}>{level}</option>
		}
	}
}

var logSelector = function (state, dispatch) {
	return (
		<select onChange={function (e) { dispatch(actions.filter(e.target.value)) }}>
			{log.levels().map( logOption(state.filter) )}
		</select>
	)

}

module.exports = logSelector

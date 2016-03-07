var React = require('react')
var Color = require("color")
var moment = require('moment')

var levels = {
	ERROR: 'red',
	INFO: 'white',
	WARN: 'yellow',
	TRACE: 'blue',
	DEBUG: '#0f0'
}

Object.keys(levels).forEach(function (key) {
	levels[key] = Color(levels[key]).lighten(0.9).hslString()
})

var styles = function () {

	var border = '#ccc'
	var fg = '#777'
	var bg = '#fff'

	return {
		table: {
			color: fg,
			background: bg,
			border: '1px ' + border + ' solid',
			boxShadow: '0 0 2px ' + border,
			borderCollapse: 'collapse',
			borderRadius: 2,
			fontFamily: 'sans-serif',
			width: '100%'
		},
		header: {
			color: bg,
			background: fg,
			padding: 8
		},
		row: function (level) {
			return {
				borderBottom: '1px #ccc solid',
				padding: 5,
				background: levels[level]
			}
		}
	}
}

var format = function (time) {
	return moment(time).format('MMMM Do YYYY, h:mm:ss a')
}

var logEntry = function (styles) {
	return function (entry) {
		var rowStyle = styles.row(entry.level)
		return (
			<tr>
				<td width={250} style={rowStyle}>{format(entry.time)}</td>
				<td width={100} style={rowStyle}>{entry.level}</td>
				<td style={rowStyle}>{entry.message}</td>
				<td width={200} style={rowStyle}>{entry.app}</td>
				<td width={200} style={rowStyle}>{entry.bundle}</td>
			</tr>
		)
	}
}

var filter = function (level) {
	return function (entry) {
		return level === 'ALL' || entry.level === level
	}
}


var logViewer = function (styles) {
	return function (state) {
		console.log(state)
		
		return (
			<table style={styles.table}>
				<thead>
					<tr>
						<td style={styles.header}>Time</td>
						<td style={styles.header}>Level</td>
						<td style={styles.header}>Message</td>
						<td style={styles.header}>App</td>
						<td style={styles.header}>Bundle</td>
					</tr>
				</thead>
				<tbody>
					{state.logs.filter( filter(state.filter) ).map( logEntry(styles) )}
				</tbody>
			</table>
		)
	}
}

exports.viewer = function (state) {
	console.log(state)
	return logViewer(styles()) (state)
}

exports.levels = function () {
	return ['ALL'].concat(Object.keys(levels))
}
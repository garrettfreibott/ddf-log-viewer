var m = require('merge')

module.exports = function (state, action) {
	if (state === undefined) {
		return {
			logs: [],
			filter: { level: 'ALL' },
      open: true
		}
	}

	switch (action.type) {
		case 'FILTER_LOGS':
			return m(true, state, {
				filter: m(true, state.filter, action.filter)
			})

		case 'APPEND_LOGS':
			return m(true, state, {
				logs: [action.entry].concat(state.logs)
			})

    case 'TOGGLE_LOGS':
			return m(true, state, {
        open: !state.open
			})

		default:
			return state
	}
}

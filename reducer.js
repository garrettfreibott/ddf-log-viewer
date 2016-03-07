module.exports = function (state, action) {
	if (state === undefined) {
		return {
			logs: [],
			filter: 'ALL'
		}
	}

	switch (action.type) {
		case 'FILTER_LOGS':
			return {
				logs: state.logs,
				filter: action.level
			}

		case 'APPEND_LOGS':
			return {
				logs: [action.entry].concat(state.logs),
				filter: state.filter
			}

		default:
			return state
	}
}

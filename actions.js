exports.filter = function (level) {
	return {
		type: 'FILTER_LOGS',
		level: level
	}
}

exports.append = function (entry) {
	return {
		type: 'APPEND_LOGS',
		entry: entry
	}
}
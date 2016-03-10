var React = require('react')
var moment = require('moment')

var levels = require('./levels')

var format = function (time) {
  return moment(time).format('MMMM Do YYYY, h:mm:ss a')
}

var styles = function (level) {
  return {
    borderBottom: '1px #ccc solid',
    padding: 5,
    background: levels(level)
  }
}

var LogEntry = function (props) {
  var entry = props.entry
  var s = styles(entry.level)

  return (
    <tr>
      <td style={s} width={250}>
        {format(entry.time)}
      </td>
      <td style={s} width={100}>
        {entry.level}
      </td>
      <td style={s}>
        {entry.message}
      </td>
      <td style={s} width={200}>
        {entry.app}
      </td>
      <td style={s} width={200}>
        {entry.bundle}
      </td>
    </tr>
  )
}

module.exports = LogEntry

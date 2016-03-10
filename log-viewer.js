var React = require('react')

var LevelSelector = require('./level-selector')
var TextFilter = require('./text-filter')
var LogEntry = require('./log-entry')
var actions = require('./actions')

var filter = require('./filter')

var styles = function () {
  var border = '#ccc'
  var fg = '#777'
  var bg = '#fff'

  return {
    container: {
      display: 'table',
      height: '100%',
      width: '100%',
      background: '#ccc'
    },
    table: {
      color: fg,
      background: bg,
      borderCollapse: 'collapse',
      width: '100%'
    },
    header: {
      color: bg,
      background: fg,
      padding: 8
    },
    scroll: {
      display: 'block',
      overflowY: 'auto',
      overflowX: 'hidden',
      height: '100%'
    },
    bar: {
      display: 'table-row',
      height: 64,
      boxShadow: '0 0 2px black'
    },
    logs: {
      display: 'table-row',
      position: 'relative'
    },
    controls: {
      padding: 4,
      borderBottom: '1px ' + border + ' solid'
    }
  }
}

var select = function (dispatch) {
  return function (level) {
    dispatch(actions.filter({ level: level }))
  }
}

var entries = function (props) {
  return filter(props.filter, props.logs)
    .map(function (entry) {
      return <LogEntry entry={entry} />
    })
}

var textFilter = function (field, props) {
  var on = function (o) {
    props.dispatch(actions.filter(o))
  }

  return (
    <TextFilter field={field} value={props.filter[field]} onChange={on} />
  )
}

var LogViewer = function (props) {
  var s = styles()

  return (
    <div style={s.container}>
      <div style={s.bar}>
        <table style={s.table}>
          <thead>
            <tr>
              <td style={s.header} width={250}>
                Time
              </td>
              <td style={s.header} width={100}>
                Level
              </td>
              <td style={s.header}>
                Message
              </td>
              <td style={s.header} width={200}>
                App
              </td>
              <td style={s.header} width={200}>
                Bundle
              </td>
            </tr>
            <tr>
              <td style={s.controls}></td>
              <td style={s.controls}>
                <LevelSelector selected={props.filter.level} onSelect={select(props.dispatch)} />
              </td>
              <td style={s.controls}>
                {textFilter('message', props)}
              </td>
              <td style={s.controls}>
                {textFilter('app', props)}
              </td>
              <td style={s.controls}>
                {textFilter('bundle', props)}
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <div style={{ display: 'table-row', position: 'relative' }}>
        <div style={s.scroll}>
          <table style={s.table}>
            <tbody>
              {entries(props)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

module.exports = LogViewer

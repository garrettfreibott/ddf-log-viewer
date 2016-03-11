var React = require('react')

var LogViewer = require('./log-viewer')
var actions = require('./actions')

var styles = function (props) {
  return {
    btn: {
      padding: '10px 15px',
      color: '#fff',
      background: '#777',
      border: 0,
      marginRight: 10,
      position: 'absolute',
      right: 0,
      top: -40,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      fontSize: 14,
      cursor: 'pointer'
    },
    icon: {
      border: '1px solid white',
      borderRadius: '100%',
      display: 'inline-block',
      width: 18,
      height: 18,
      marginLeft: 12
    },
    panel: {
      position: 'fixed',
      height: (props.state.open) ? '50%' : 0,
      left: 0,
      right: 0,
      bottom: 0,
      fontFamily: 'sans-serif',
      fontSize: 14
    }
  }
}

var LogPanel = function (props) {
  var state = props.state
  var dispatch = props.dispatch
  var s = styles(props)

  var toggle = function () {
    dispatch(actions.toggle())
  }

  var viewer = function () {
    if (state.open) {
      return (
        <LogViewer
          filter={state.filter}
          logs={state.logs}
          dispatch={window.store.dispatch} />
      )
    }
  }

  var icon = function () {
    if (state.open) {
      return <span style={s.icon}>-</span>
    }
    return <span style={s.icon}>+</span>
  }

  return (
    <div style={s.panel}>
      <button style={s.btn} onClick={toggle}>
        Logs
        {icon()}
      </button>
      {viewer()}
    </div>
  )
}

module.exports = LogPanel

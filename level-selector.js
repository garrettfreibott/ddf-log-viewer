var React = require('react')
var levels = require('./levels')

var options = function () {
  return levels().map(function (level) {
    return (
      <option key={level} value={level}>
        {level}
      </option>
    )
  })
}

var select = function (fn) {
  return function (e) { fn(e.target.value) }
}

var LevelSelector = function (props) {
  return (
    <select value={props.selected} onChange={select(props.onSelect)}>
      {options()}
    </select>
  )
}

module.exports = LevelSelector

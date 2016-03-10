var React = require('react')

var styles = function () {
  return {
    width: '100%',
    display: 'inline-block',
    margin: 0,
    padding: 5,
    boxSizing: 'border-box',
    borderRadius: 3,
    border: '1px #ccc solid'
  }
}

var change = function (props) {
  return function (e) {
    var o = {}
    o[props.field] = e.target.value
    props.onChange(o)
  }
}

module.exports = function (props) {
  return (
    <input
      style={styles()}
      value={props.value}
      onChange={change(props)}
      placeholder={props.field.toUpperCase()} />
  )
}

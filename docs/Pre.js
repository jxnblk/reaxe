const sx = require('superstyle/react')
const { pre } = require('../lib')
const colors = require('./colors')

const style = {
  fontFamily: 'SFMono, Menlo, monospace',
  fontSize: 14,
  padding: 8,
  color: colors[0][6],
  backgroundColor: '#000',
  opacity: 3/4,
  mixBlendMode: 'multiply'
}

module.exports = sx(style)(_props => {
  const props = Object.assign({}, _props, {
    style: {
      color: _props.color
    }
  })

  return pre(props)
})

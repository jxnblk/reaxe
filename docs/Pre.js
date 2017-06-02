const sx = require('superstyle/react')
const { pre } = require('../lib')
const colors = require('./colors')

const style = {
  fontFamily: 'SF Mono, Menlo, monospace',
  lineHeight: 1.75,
  fontSize: 14,
  maxWidth: '100%',
  padding: 8,
  color: colors[0][6],
  backgroundColor: '#000',
  opacity: 7/8,
  mixBlendMode: 'multiply',
  overflow: 'auto'
}

module.exports = sx(style)(_props => {
  const props = Object.assign({}, _props, {
    style: {
      color: _props.color
    }
  })

  return pre(props)
})

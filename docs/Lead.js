const sx = require('superstyle/react')
const { p } = require('../lib')

const style = {
  fontSize: 24,
  fontWeight: 600,
  marginTop: 32,
  marginBottom: 32,
  opacity: 7/8,
  mixBlendMode: 'multiply'
}

module.exports = sx(style)(props => p(props))

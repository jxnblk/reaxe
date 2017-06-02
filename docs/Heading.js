const sx = require('superstyle/react')
const { h1 } = require('../lib')
const breakpoints = require('./breakpoints')

const style = {
  fontSize: 48,
  lineHeight: 1,
  display: 'inline-flex',
  margin: 0,
  padding: 8,
  opacity: 3/4,
  mixBlendMode: 'multiply',
  color: '#fff',
  backgroundColor: '#000',

  [breakpoints[0]]: {
    fontSize: 48,
  },
  [breakpoints[1]]: {
    fontSize: 64,
  },
  [breakpoints[2]]: {
    fontSize: 96,
  }
}

module.exports = sx(style)(props => h1(props))

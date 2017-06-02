const sx = require('superstyle/react')
const breakpoints = require('./breakpoints')

module.exports = sx({
  width: '100%',
  padding: 24,
  [breakpoints[0]]: {
    padding: 48
  },
  [breakpoints[1]]: {
    padding: 64
  },
  [breakpoints[2]]: {
    padding: 96
  }
})('div')

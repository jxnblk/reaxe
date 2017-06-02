const sx = require('superstyle/react')
const { h1 } = require('../lib')

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

  '@media screen and (min-width:40em)': {
    fontSize: 48,
  },
  '@media screen and (min-width:52em)': {
    fontSize: 64,
  },
  '@media screen and (min-width:64em)': {
    fontSize: 96,
  },
}

module.exports = sx(style)(props => h1(props))

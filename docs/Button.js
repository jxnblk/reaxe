const sx = require('superstyle/react')

const style = {
  display: 'inline-flex',
  fontSize: 12,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '.3em',
  padding: 16,
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#000',
  borderRadius: 6,
  opacity: 3/4,
  mixBlendMode: 'multiply',
  transitionProperty: 'opacity, transform',
  transitionDuration: '.1s',
  transitionTimingFunction: 'ease-out',
  userSelect: 'none',

  ':hover': {
    opacity: 1,
    transform: `scale(${17/16})`,
    boxShadow: `0 0 32px rgba(0, 0, 0, .5)`
  },
  ':focus': {
    outline: 'none',
    transform: `scale(${17/16})`,
    opacity: 1,
  },
  ':active': {
    transform: `scale(${15/16})`,
    boxShadow: `inset 0 0 8px rgba(0, 0, 0, .5)`
  }
}

module.exports = sx(style)('a')

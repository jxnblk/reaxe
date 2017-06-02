const sx = require('superstyle/react')
const x = require('../lib')
const Box = require('./Box')
const { footer } = x

const Link = sx({
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 'bold',
  fontSize: 14,
  marginRight: 16,
  ':hover': {
    textDecoration: 'underline',
  }
})('a')

module.exports = () => footer([
  x(Box)([
    x(Link)({ href: 'https://github.com/jxnblk/reaxe' }, 'GitHub'),
    x(Link)({ href: 'http://jxnblk.com' }, 'Made by Jxnblk'),
  ])
])

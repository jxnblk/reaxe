const { connect } = require('funcup')
const sx = require('superstyle/react')
const x = require('../lib')
const {
  header,
  div,
  h1,
  p,
  button,
  code
} = require('../lib')
const { inc, dec } = require('./updaters')
const Flex = require('./Flex')
const Card = require('./Card')
const Heading = require('./Heading')
const Lead = require('./Lead')
const Button = require('./Button')
const Pre = require('./Pre')
const breakpoints = require('./breakpoints')

const Wrap = sx({
  display: 'flex',
  alignItems: 'center',
  minHeight: '70vh',
  padding: 16,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundBlendMode: 'overlay',
  WebkitFontSmoothing: 'antialiased',
  transitionProperty: 'background-color',
  transitionDuration: '.3s',
  transitionTimingFunction: 'ease-out',

  [breakpoints[0]]: {
    padding: 32
  },
  [breakpoints[1]]: {
    padding: 48
  },
  [breakpoints[2]]: {
    padding: 64
  },
})('div')


module.exports = connect()(props => header([
  x(Wrap)({
    onClick: e => props.update(inc),
    style: {
      backgroundColor: props.color,
      backgroundImage: `url(${bg}), ${gradient(-120, 'transparent', props.altColor)}`,
    }
  }, [
    x(Card)([
      x(Heading)('Reaxe'),
      x(Lead)('Syntactic sugar for React.createElement and JSX alternative'),
      x(Flex)([
        x(Button)({
          href: 'https://github.com/jxnblk/reaxe',
          css: {
            marginRight: 16
          }
        }, 'GitHub'),
        // button({ onClick: e => props.update(dec) }, '-'),
        // button({ onClick: e => props.update(inc) }, '+'),
        // code(props.count),
        x(Pre)(props, 'npm i reaxe')
      ])
    ])
  ])
]))

const gradient = (n, a, b) => `linear-gradient(${n}deg, ${a} 0%, ${b} 100%)`

// const bg = 'https://images.unsplash.com/photo-1495524495561-e6f34fe3f445?ixlib=rb-0.3.5&q=20&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=e3ccb500a1b4d8fc73de33dc9c25479d'
// const bg = 'https://images.unsplash.com/photo-1495987976467-244d20b4b39a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=cd044cfd2a913d16aa159ebfe1039990'

const bg = 'https://images.unsplash.com/photo-1488867605300-0380106bc701?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=6f4f5631fa19029f3b4da0f9d9ecf53d'

// const bg = 'https://images.unsplash.com/photo-1483992233021-1801812fdacb?ixlib=rb-0.3.5&q=20&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=c78ec2fc9c82cc1824a53a8fcbbbd989'
// const bg = 'https://images.unsplash.com/photo-1493772616714-89e03de3eba8?ixlib=rb-0.3.5&q=20&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=c10de9a0de32d7fa93017a293398a5cb'
// const bg = 'https://images.unsplash.com/photo-1475906089153-644d9452ce87?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=eed8206ef9cb9b4f88e503754af91388'

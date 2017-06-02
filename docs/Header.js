const { connect } = require('funcup')
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
const Heading = require('./Heading')
const Lead = require('./Lead')
const Pre = require('./Pre')

module.exports = connect()(props => header([
  div({
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '50vh',
      padding: 48,
      backgroundColor: props.color,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundImage: `url(${bg}), ${gradient(-120, 'transparent', props.altColor)}`,
      backgroundBlendMode: 'overlay',
    }
  }, [
    div([
      x(Heading)('Reaxe'),
      x(Lead)('Syntactic sugar for React.createElement and JSX alternative'),
      button({ onClick: e => props.update(dec) }, '-'),
      button({ onClick: e => props.update(inc) }, '+'),
      code(props.count),
      x(Pre)(props, 'npm i reaxe')
    ])
  ])
]))

const gradient = (n, a, b) => `linear-gradient(${n}deg, ${a} 0%, ${b} 100%)`

// const bg = 'https://images.unsplash.com/photo-1495524495561-e6f34fe3f445?ixlib=rb-0.3.5&q=20&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=e3ccb500a1b4d8fc73de33dc9c25479d'
const bg = 'https://images.unsplash.com/photo-1495987976467-244d20b4b39a?ixlib=rb-0.3.5&q=20&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=cd044cfd2a913d16aa159ebfe1039990'

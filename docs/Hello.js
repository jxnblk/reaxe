const { createProvider } = require('funcup')
const { sheet } = require('superstyle')
const x = require('../lib')
const { style, div, h1, p } = require('../lib')
const Header = require('./Header')
const Example = require('./Example')
const Footer = require('./Footer')
const colors = require('./colors')

const App = props => {
  const i = Math.abs(props.count + 4) % colors.length
  const color = colors[i][4]
  const altColor = colors[(i + 6) % colors.length][5]

  return div([
    x(Header)({ color, altColor }),
    Example({ color }),
    Footer()
  ])
}

sheet.insert([
  '*{box-sizing:border-box}',
  'body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;margin:0;-webkit-font-smoothing:antialiased}'
])


const initialState = {
  count: 0
}

module.exports = createProvider(initialState)(App)

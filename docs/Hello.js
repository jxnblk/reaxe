const { createProvider } = require('funcup')
const x = require('../lib')
const { style, div, h1, p } = require('../lib')
const Header = require('./Header')
const colors = require('./colors')

const Style = css => style({ dangerouslySetInnerHTML: { __html: css } })

const App = props => {
  const i = Math.abs(props.count) % colors.length
  const color = colors[i][4]
  const altColor = colors[Math.abs(i - 2)][5]

  return div([
    Style(css),
    x(Header)({ color, altColor }),
  ])
}

const css = '*{box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;margin:0}'

const initialState = {
  count: 0
}

module.exports = createProvider(initialState)(App)

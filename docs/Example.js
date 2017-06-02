const sx = require('superstyle')
const {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} = require('react-live')
const x = require('../lib')
// const Pre = require('./Pre')
const Box = require('./Box')
const { section, h2, p } = x

const filtered = Object.keys(x)
  .filter(key => key !== 'var')
  .reduce((a, b) => Object.assign(a, { [b]: x[b] }), {})


module.exports = props => section([
  x(Box)([
    h2('Example'),
    x(LiveProvider)({
      code,
      scope,
      className: rules.live.className
    }, [
      x(LivePreview)({
        className: rules.preview.className
      }),
      x(LiveError)({
        className: rules.err.className
      }),
      x(LiveEditor)({
        className: rules.editor.className
      }),
    ]),
    // x(Pre)(props, code)
  ])
])

const Section = props => section({ style: { padding: 32 }}, props.text)
const scope = Object.assign({ x, Section }, filtered)

const rules = {
  live: sx({
    position: 'relative',
  }),
  preview: sx({
    padding: 16,
    borderColor: '#eee',
    borderStyle: 'solid',
    borderWidth: 1
  }),
  err: sx({
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    padding: 16,
    fontFamily: 'SF Mono, Menlo, monospace',
    lineHeight: 1.25,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'red',
  }),
  editor: sx({
    fontFamily: 'SF Mono, Menlo, monospace',
    lineHeight: 1.5,
    overflow: 'auto'
  })
}

const code = ` const Header = props => header([
  h1('Hello Reaxe'),
  p('This is a demonstration of using Reaxe with HTML elements'),
  x(Section)({
    text: 'This is what using custom components looks like'
  })
])
`

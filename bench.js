const Benchmark = require('benchmark')
const { createElement } = require('react')
const tags = require('html-tags')
const x = require('./lib')

const suite = new Benchmark.Suite

suite.add('createElement', () => {
  const el = createElement('div', { className: 'hi' })
})
.add('createElement with string', () => {
  const el = createElement('div', null, 'Hello')
})

.add('x with props', () => {
  const el = x('div')({ className: 'hi' })
})
.add('x with string', () => {
  const el = x('div')('Hello')
})
.add('x with array', () => {
  const el = x('div')([ 'Hello', 'hi' ])
})

.on('complete', function () {
  console.log('Done')
  this.filter(bench => {
    console.log(`${bench.name} ${bench.hz}Hz`)
  })
})
.run({
  async: true
})


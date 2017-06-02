const test = require('ava')
const { createElement, isValidElement } = require('react')
const { isElement } = require('react-dom/test-utils')
const render = require('react-test-renderer').create
const tags = require('html-tags')
const x = require('./lib')

test('exports a function', t => {
  t.is(typeof x, 'function')
})

test('x returns a function', t => {
  t.is(typeof x('div'), 'function')
})

test(`x('div') returns a React element`, t => {
  const a = x('div')('Hello')
  t.true(isElement(a))
})

test(`x('div') produces the same result as createElement`, t => {
  const a = render(x('div')('Hello')).toJSON()
  const b = render(createElement('div', null, 'Hello')).toJSON()
  t.deepEqual(a, b)
})

test('x(Component) returns a React element', t => {
  const Component = props => createElement('h1', null, 'Hello')
  const a = x(Component)()
  t.true(isElement(a))
})

test('x(Component) produces the same result as createElement', t => {
  const Component = props => createElement('h1', null, 'Hello')
  const a = render(x(Component)()).toJSON()
  const b = render(createElement(Component)).toJSON()
  t.deepEqual(a, b)
})

tags.forEach(tag => {
  test(`x.${tag} returns the same as x('${tag}')`, t => {
    t.is(typeof x[tag], 'function')
    const a = x[tag]('Hello')
    const b = x(tag)('Hello')
    t.deepEqual(a, b)
    t.snapshot(a)
  })
})

test('x.div passes numbers as children', t => {
  const a = x.div(256)
  const b = createElement('div', null, 256)
  t.deepEqual(a, b)
})

test('x.div passes arrays as children', t => {
  const a = x.div([
    'Hello ',
    'Hi!'
  ])
  const b = createElement('div', null, 'Hello ', 'Hi!')
  t.deepEqual(a, b)
})

test('x.div passes objects as props', t => {
  const a = x.div({ className: 'foo' })
  const b = createElement('div', { className: 'foo' })
  t.deepEqual(a, b)
})

test('x.div passes second argument as children with props', t => {
  const a = x.div({ className: 'foo' }, 'Hello')
  const b = createElement('div', { className: 'foo' }, 'Hello')
  t.deepEqual(a, b)
})

test('x.div passes second number argument as children with props', t => {
  const a = x.div({ className: 'foo' }, 256)
  const b = createElement('div', { className: 'foo' }, 256)
  t.deepEqual(a, b)
})

test('x.div passes second array argument as children with props', t => {
  const a = x.div({ className: 'foo' }, [ 'Hello', 'hi' ])
  const b = createElement('div', { className: 'foo' }, 'Hello', 'hi')
  t.deepEqual(a, b)
})


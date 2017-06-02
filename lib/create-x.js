const tags = require('html-tags')

/*
 * Higher order function for wrapping a createElement function.
 *
 * This can be used with React.createElement, Preact.h, HyperScript,
 * or any other createElement function that accepts arguments in the same order.
 *
 */

module.exports = fn => {
  const x = tag => (arg, ...children) => obj(arg)
    ? fn(tag, arg, ...chx(children))
    : arr(arg)
    ? fn(tag, null, ...arg)
    : fn(tag, null, arg)

  tags.forEach(tag => {
    x[tag] = x(tag)
  })

  return x
}

const obj = o => typeof o === 'object' && !Array.isArray(o)
const arr = a => Array.isArray(a)
const chx = arr => Array.isArray(arr[0]) ? arr[0] : arr

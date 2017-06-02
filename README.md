
# Reaxe

:candy: Syntactic sugar for React.createElement and JSX alternative

```sh
npm i reaxe
```


```js
const { div, h1 } = require('reaxe')

const Component = props => div([
  h1('Hello')
])
```


## Motivation

Using JSX in Node.js or Electron environments requires the use of transpilers
like Babel. React can be used in these environments without JSX, but the syntax
can be a little cumbersome compared to JSX. This module is meant to be a small
wrapper around React.createElement to make the syntax easier to read and work with.
*I have no idea whether this is a good idea or not.*

```jsx
// JSX
<div>
  <h1 className='foo'>Hello</h1>
  <h2>JSX</h2>
</div>

// React.createElement
const h = React.createElement
h('div', null,
  h('h1', {
    className: 'foo'
  }, 'Hello'),
  h('h2', null, 'JSX')
)

// reaxe
div([
  h1({ className: 'foo' }, 'Hello'),
  h2('reaxe')
])
```


## API

### `x`

```js
x(type)([propsOrChildren], [...children])
```

Wrapped createElement function that calls `React.createElement`.
Type can either be an HTML tag string or a React component.
The returned function accepts either `props` or `children` as its first argument.
If the argument is a plain object or null, it will be passed as the second argument to `React.createElement`.
If the argument is any other type, it will be passed as the third argument.

```js
// The following arguments are passed as children:
x('div')('Hello')
// React.createElement('div', null, 'Hello')

x('div')(2048)
// React.createElement('div', null, 2048)

const name = 'Sue'
x('div')([ 'Hello ', name, '!' ])
// React.createElement('div', null, 'Hello ', name, '!')

// An object will be passed as props:
x('div')({ style: { backgroundColor: 'tomato' } })
// React.createElement('div', { style: backgroundColor: 'tomato' })

x('div')({ className: 'foo' }, 'Hello')
x('div')({ className: 'foo' }, 256)
x('div')({ className: 'foo' }, [ 'Hello ', name ])
```


### `x[tag]`

All [HTML tags](https://www.npmjs.com/package/html-tags) are provided as keys on the main export.
They return a createElement function with the key passed to the first function.

```js
x.div('Hello')
// React.createElement('div', null, 'Hello')
```

MIT License

const palx = require('palx')
const palette = palx('#07c')

module.exports = Object.keys(palette)
  .filter(key => Array.isArray(palette[key]))
  .map(key => palette[key])


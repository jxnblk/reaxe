const dec = state => ({ count: state.count - 1 })
const inc = state => ({ count: state.count + 1 })

module.exports = {
  dec,
  inc
}

if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/freeze-click.js')
} else {
  module.exports = require('./dist/freeze-click.common.js')
}

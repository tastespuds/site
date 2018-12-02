const konfiga = require('konfiga')

module.exports = konfiga({
  port: {
    envVariableName: 'PORT',
    cmdLineArgName: 'port',
    type: Number
  }
})

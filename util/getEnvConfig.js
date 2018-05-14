// TODO: this is used across both doghouse and puppystack atm which feels bad, give more throught as to how to best handle config between the two modules

const path = require('path')

module.exports = function (opts = {}) {
  return {
    MODE: opts.mode || process.env.NODE_ENV === 'production' ? 'production' : 'development',
    HOST: opts.host || process.env.HOST || 'localhost',
    PORT: opts.port || process.env.PORT || 3000,
    DEV_SERVER_PORT: opts.devServerPort || process.env.DEV_SERVER_PORT || 3001,
    BUILD_DIR: opts.buildDir || process.env.BUILD_DIR || 'build',
    PUBLIC_DIR: opts.publicDir || process.env.PUBLIC_DIR || 'build/public'
  }
}

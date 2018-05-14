const feathersMemory = require('feathers-memory')

module.exports = function (app) {
  // const db = app.get('db')

  const name = 'puppies'
  // const options = { Model: db, name }

  app.use(name, feathersMemory())
  // app.service(name).hooks(hooks)
}

// const hooks = {
//   before: {},
//   after: {},
//   error: {}
// }

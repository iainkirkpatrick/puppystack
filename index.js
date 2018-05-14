import http from 'http'
import expressServer from './server'

// TODO: reflect on if this is really necessary, see util/getEnvConfig.js
import getEnvConfig from './util/getEnvConfig'
const envConfig = getEnvConfig()

const server = http.createServer(expressServer)
let currentExpressServer = expressServer

server.listen(envConfig.PORT, error => {
  if (error) {
    console.log(error)
  }

  console.log('🚀 started')
})

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!')

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...')
    server.removeListener('request', currentExpressServer)
    const newServer = expressServer
    server.on('request', newServer)
    currentExpressServer = newServer
  })
}

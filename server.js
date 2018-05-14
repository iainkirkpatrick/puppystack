import server from './example-app/server'
import client from './example-app/client'
import React from 'react'
import express from '@feathersjs/express'
import feathers from '@feathersjs/feathers'
import { renderToString } from 'react-dom/server'
import dedent from 'dedent-js'

// TODO: reflect on if this is really necessary, see util/getEnvConfig.js
import getEnvConfig from './util/getEnvConfig'
const envConfig = getEnvConfig()

const app = express(feathers())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.configure(express.rest())
app.use(express.errorHandler())
server.forEach(service => {
  app.configure(service)
})
app
  .disable('x-powered-by')
  .use(express.static(envConfig.PUBLIC_DIR))
  .get('/*', (req, res) => {
    const markup = renderToString(React.createElement(client))
    res.send(
      dedent`<!doctype html>
          <html lang="">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charSet='utf-8' />
              <title>puppystack</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
              <div id="root">${markup}</div>
              ${process.env.NODE_ENV === 'production'
              ? `<script src="http://${envConfig.HOST}:${envConfig.PORT}/bundle.js" defer></script>`
              : `<script src="http://${envConfig.HOST}:${envConfig.DEV_SERVER_PORT}/bundle.js" defer crossorigin></script>`}
          </body>
      </html>`
    )
  })

export default app

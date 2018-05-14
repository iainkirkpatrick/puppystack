import React from 'react'
import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import fetch from 'isomorphic-unfetch'

import Puppies from './puppies/components/Puppies'

const app = feathers()
const restClient = rest()
app.configure(restClient.fetch(fetch))
const puppiesService = app.service('puppies')

const Client = () => {
  return <div style={{ backgroundColor: 'red' }}>
    <Puppies puppiesService={puppiesService} />
  </div>
}

export default Client

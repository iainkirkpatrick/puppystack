// for now, in the style of dogstack server
// but might be cool to also allow the customisation of the server markup + express middleware here too?
// maybe in a similar way to the doghouse.config.js modification functions?

import puppiesService from './puppies/services/puppies'

export default [
  puppiesService
]

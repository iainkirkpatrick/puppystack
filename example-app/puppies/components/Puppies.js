import React from 'react'

class Puppies extends React.Component {
  constructor () {
    super()
    this.state = {
      puppies: []
    }
  }

  render () {
    return <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>
        Welcome to Puppystack HOT AF.
      </span>
      <button onClick={() => {
        this.props.puppiesService.create({ name: 'Rufus' })
        .then((res) => this.setState({ puppies: this.state.puppies.concat(res) }))
      }}>clickme</button>
      {
        this.state.puppies.map((pup) => {
          return <span>{pup.name}</span>
        })
      }
    </div>
  }
}

export default Puppies

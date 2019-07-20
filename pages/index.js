import React, { Component } from 'react'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }

    this.reset = this.reset.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '40vh' }}>
        <h1>{ this.state.count }</h1>
        <button onClick={ this.increment }>+</button>
        <button onClick={ this.reset }>reset</button>
        <button onClick={ this.decrement }>-</button>
      </div>
    )
  }

  reset() {
    this.setState({
      count: 0
    })
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }
}

export default Home

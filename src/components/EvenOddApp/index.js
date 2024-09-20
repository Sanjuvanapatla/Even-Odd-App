import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {increment: 0}

  onIncrement = () => {
    const randomIncrement = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      increment: prevState.increment + randomIncrement,
    }))
  }

  render() {
    const {increment} = this.state
    return (
      <div className="bg-conatiner">
        <div className="main-app">
          <div className="items">
            <h1 className="h1">Count {increment}</h1>
            <p className="p1">
              {increment % 2 === 0 ? 'Count is Even' : 'Count is Odd'}
            </p>
            <button type="button" className="btn-1" onClick={this.onIncrement}>
              Increment
            </button>
            <p className="p2">*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

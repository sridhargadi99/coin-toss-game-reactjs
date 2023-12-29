// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    head: 0,
    tail: 0,
  }

  headCount = () => {
    this.setState(prevState => ({total: prevState.total + 1}))
    this.setState(prevState => ({head: prevState.head + 1}))
    this.setState({
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    })
  }

  tailCount = () => {
    this.setState(prevState => ({total: prevState.total + 1}))
    this.setState(prevState => ({tail: prevState.tail + 1}))
    this.setState({
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    })
  }

  buttonClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.headCount()
    } else {
      this.tailCount()
    }
  }

  render() {
    const {imageUrl, total, head, tail} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading-style">Coin Toss Game</h1>
          <p className="main-paragraph-style">Heads (or) Tails</p>
          <img className="image-style" src={imageUrl} alt="toss result" />
          <button
            type="button"
            className="toss-button-style"
            onClick={this.buttonClick}
          >
            Toss Coin
          </button>
          <div className="list-container">
            <p>Total: {total}</p>
            <p>Heads: {head}</p>
            <p>Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

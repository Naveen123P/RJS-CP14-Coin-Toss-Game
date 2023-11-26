// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    Total: 0,
    Heads: 0,
    Tails: 0,
    imageURL: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  getHeadOrTail = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        Total: prevState.Total + 1,
        Heads: prevState.Heads + 1,
        imageURL: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        Total: prevState.Total + 1,
        Tails: prevState.Tails + 1,
        imageURL: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const headOrTail = this.state
    const {Total, Heads, Tails, imageURL} = headOrTail
    return (
      <div className="bg-container1">
        <div className="bg-container2">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageURL} alt="..." className="coin-img" />
          <button type="button" onClick={this.getHeadOrTail}>
            Toss Coin
          </button>
          <div className="THT-container">
            <p>Total: {Total}</p>
            <p>Heads: {Heads}</p>
            <p>Tail: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

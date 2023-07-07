// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsContainer extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="fruits-container">
        <div className="fruits-counter-container">
          <h1 className="heading">
            Bob ate <span className="count-element">{mangoCount}</span> mangoes{' '}
            <span className="count-element">{bananaCount}</span> bananas
          </h1>
          <div className="align-fruits">
            <div className="fruit-count-alignment">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                className="fruit-btn"
                type="button"
                onClick={this.onMangoIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-count-alignment">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                className="fruit-btn"
                type="button"
                onClick={this.onBananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsContainer

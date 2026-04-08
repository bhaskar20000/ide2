// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
    inputText: '',
  }

  render() {
    const {count, inputText} = this.state
    const onChangeInput = event => {
      const textCount = event.target.value.length
      this.setState({
        count: textCount,
        inputText: event.target.value,
      })
    }

    return (
      <div className="outer-container">
        <div className="inner-container">
          <div className="names-container">
            <h1>Calculate the Letters you enter</h1>
            <div className="label-container">
              <label htmlFor="input-tag">Enter the phrase</label>
              <input
                onChange={onChangeInput}
                id="input-tag"
                type="text"
                value={inputText}
                placeholder="Enter the phrase"
              />
            </div>
            <p className="para-button">No.of letters: {count}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

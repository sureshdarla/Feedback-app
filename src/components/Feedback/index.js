import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  renderFeedbackQuestionCard = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1>How satisfied are you with our customer support perfomance</h1>

        <ul>
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button">
                <img src={emoji.imageUrl} alt={emoji.name} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state

    return (
      <div>
        <div>{isFeedbackGiven ? this.renderFeedbackQuestionCard() : null}</div>
      </div>
    )
  }
}

export default Feedback

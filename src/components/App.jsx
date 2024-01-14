import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

options = this.props.options;

handleClick = (e) => {
  this.setState((prevState) => ({[e.target.name]: prevState[e.target.name] + 1 } ))
};

countTotalFeedback = () => {
  const values = Object.values(this.state);
  return values.reduce((prevValue, elem) => (prevValue + elem), 0);
};

countPositiveFeedbackPercentage = () => {
  const total = this.countTotalFeedback();
  return Math.round(this.state.good*100/total);
}

  render() {
    return (
      <div>
        <Section title = 'Please leave feedback'>
        <FeedbackOptions options={this.options} onLeaveFeedback={this.handleClick}/>
        </Section>

        {this.countTotalFeedback()?
        <Section title = 'Please leave feedback'>
        <Statistics state = {this.state} options={this.options} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
        </Section>
        : <Notification message="There is no feedback"/>
        }
        
      </div>
  )}

};

export default App;
import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackGood = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };
  handleFeedbackBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };
  handleFeedbackNeutral = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleFeedbackGood}>
          Good
        </button>
        <button type="button" onClick={this.handleFeedbackBad}>
          Bad
        </button>
        <button type="button" onClick={this.handleFeedbackNeutral}>
          Neutral
        </button>
        <h3>Statistics</h3>
        {this.state.good || this.state.bad || this.state.neutral ? (
          <ul>
            <li>good {this.state.good}</li>
            <li>bad {this.state.bad}</li>
            <li>neutral {this.state.neutral}</li>
            <li>
              total {this.state.good + this.state.bad + this.state.neutral}
            </li>
            <li>
              positive feedback
              {this.state.good
                ? (this.state.good * 100) /
                  (this.state.good + this.state.bad + this.state.neutral)
                : 0}
              %
            </li>
          </ul>
        ) : (
          <h3>No feedback given</h3>
        )}
      </div>
    );
  }
}

export default App;

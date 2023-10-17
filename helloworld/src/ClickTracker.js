import React, { Component } from 'react';

class ClickTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Click count: {this.state.clickCount}</p>
        <button onClick={this.handleButtonClick}>Click Me</button>
      </div>
    );
  }
}

export default ClickTracker;

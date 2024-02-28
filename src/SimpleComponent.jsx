import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      Toggle: false
    };
  }

  IncreaseCount = () => {
    if (this.state.Toggle) {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    }
  };

  ChangeToggle = () => {
    this.setState((prevState) => ({
      Toggle: !prevState.Toggle
    }));
  };

  componentDidMount() {
    console.log('This is Simple Component');
  }

  render() {
    return (
      <div>
        <h2>Simple Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.ChangeToggle}>Toggle</button>
        <button onClick={this.IncreaseCount}>Inc-Value</button>
        
      </div>
    );
  }
}

export default SimpleComponent;
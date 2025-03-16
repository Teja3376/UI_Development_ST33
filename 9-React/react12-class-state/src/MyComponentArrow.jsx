import { Component } from "react";

class Arrow extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    
  }
  // Arrow function for increment
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>MyIncrement</button> <br />
        {this.state.count}
      </div>
    );
  }
}

export default Arrow;
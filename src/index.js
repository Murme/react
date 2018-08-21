import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Timer';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {second: 0};
  }

  start = () => {
    this.interval = setInterval(this.increment, 1000);
    this.setState({
      seconds: 0
    });
  };

  stop = () => {
    clearInterval(this.interval);
  };

  reset = () => {
    this.setState({
      seconds: 0
    });
  };

  increment = () => {
    this.setState({
      seconds: this.state.seconds + 1
    });
  };

  decrement = () => {
    if (this.state.seconds > 0)
      this.setState ({
        seconds: this.state.seconds - 1
      });
  };

  render() {
    return (
      <div>
        <h1>{title}</h1>
        <div>Seconds: { this.state.seconds }</div>
        <div className="button-wrap">
          <button style={{ border: "1px solid blue", padding: "10", background: "transparent"}} className="button" onClick={this.start}>Start</button>
          <button style={{ border: "1px solid blue", padding: "10", background: "transparent" }} className="button" onClick={this.stop}>Stop</button>
          <button style={{ border: "1px solid blue", padding: "10", background: "transparent" }} className="button" onClick={this.reset}>Reset</button>
        </div>
        <div className="increment-wrap">
          <button style={{border: "1px solid blue", padding: "10", background: "transparent" }} className="button" onClick={this.increment}>+</button>
          <button style={{border: "1px solid blue", padding: "10", background: "transparent" }} className="button" onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('app')
);

module.hot.accept();
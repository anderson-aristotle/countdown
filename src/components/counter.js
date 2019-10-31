import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h4>{this.props.id}</h4>8
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={(this, handleIncrement)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={t} className=""></button>
      </div>
    );
  }

  render() {
    return;
  }
}

export default Counter;

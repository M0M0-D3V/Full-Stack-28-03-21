import React, { Component } from "react";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
      key: "value",
    };
  }

  // receive props object
  render() {
    console.log(this.props);
    console.log(this.props.charmander);
    console.log(this.props.prop1);
    console.log(this.props.number);
    const { charmander, prop1, number } = this.props;
    return (
      <>
        <h1>This is ToDo list for Today:</h1>
        <ul>
          <li>Get Stuff Done</li>
          <li>{charmander}</li>
          <li>{prop1}</li>
          <li>{this.state.number}</li>
        </ul>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          Add to Age
        </button>
      </>
    );
  }
}
export default ToDo;

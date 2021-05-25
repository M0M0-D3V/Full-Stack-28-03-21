import React, { Component } from "react";

class NewComponent extends Component {
  render() {
    //   the object this.props is sent over automatically
    const { bananaa, children } = this.props;
    return (
      <div>
        <h1>{bananaa}</h1>
        {/* if we comment out the {children} they will not show on the page */}
        {children}
      </div>
    );
  }
}

export default NewComponent;

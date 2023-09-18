import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello From {this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default ClassComponent;

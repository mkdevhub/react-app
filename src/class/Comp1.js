import React from "react";

class Comp1 extends React.Component {
  constructor(props) {
    super(props); //props should set always on both constructor and super method;
    this.state = { color: "red" };
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>My name {this.props.name} {this.state.color} </h1>
      </div>
    );
  }
}

export default Comp1;

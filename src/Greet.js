import React from "react";

class Greet extends React.Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <p>my name: {this.props.myname}</p>
        <p>my age: {this.props.myage}</p>
      </React.Fragment>
    );
  }
}

export default Greet;

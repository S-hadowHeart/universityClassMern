import React, { Component } from "react";

class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: "", lname: "", hobby: "", index: 0 };
  }
  hadleFnameChange = (e) => {
    this.setState({ fname: e.target.value });
  };
  hadleLnameChange = (e) => {
    this.setState({ lname: e.target.value });
  };
  handleHobbyChange = (e) => {
    this.setState({ hobby: e.target.value });
  };

  onclick_next = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };
  onclick_previous = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };
  render() {
    const { fname, lname, hobby, index } = this.state;

    return (
      <div>
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1> Part {index + 1}</h1>
          <input
            type="text"
            value={fname}
            placeholder="Enter First name"
            className="inputBox"
            onChange={this.hadleFnameChange}
          />{" "}
          <br />
          <h2>{fname}</h2>
        </div>
        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1> Part {index + 1}</h1>
          <input
            type="text"
            value={lname}
            placeholder="Enter last name"
            className="inputBox"
            onChange={this.hadleLnameChange}
          />{" "}
          <br />
          <h2>{lname}</h2>
        </div>

        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1> Part {index + 1}</h1>
          <input
            type="text"
            value={hobby}
            placeholder="Enter hobby name"
            className="inputBox"
            onChange={this.hadleHobbyChange}
          />{" "}
          <br />
          <h2>{hobby}</h2>
        </div>
        <div>
          <button disabled={index === 2} onClick={this.onclick_next}>
            Next
          </button>
          <button disabled={index === 0} onClick={this.onclick_previous}>
            Previous
          </button>
        </div>
      </div>
    );
  }
}

export default MultiPart;

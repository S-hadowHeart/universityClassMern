import React, { Component } from "react";
class GoogleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      phone: "",
      gender: "",
      country: "",
      date: "",
      branch: "",
      color: "",
      about: "",
      index: 0,
    };
  }
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
  handleCountryChange = (e) => {
    this.setState({ country: e.target.value });
  };
  handleGenderChange = (e) => {
    this.setState({ gender: e.target.value });
  };
  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  };
  handlebranch = (e) => {
    this.setState({ branch: e.target.value });
  };
  render() {
    const {
      fname,
      lname,
      phone,
      gender,
      country,
      date,
      branch,
      // color,
      // about,
      index,
    } = this.state;
    return (
      <div>
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part {index + 1}</h1>
          <input
            type="text"
            value={fname}
            placeholder="First Name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>
        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1>Part {index + 1}</h1>
          <input
            type="text"
            value={lname}
            placeholder="last Name"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>
        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1>Part {index + 1}</h1>
          <input
            type="number"
            value={phone}
            placeholder="last Name"
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
        </div>
        <div style={{ display: index === 3 ? "" : "none" }}>
          <h1>Part {index + 1}</h1>
          <div onChange={this.handleGenderChange} className="mytxt">
            <input type="radio" name="gender" value="Male" /> Male
            <input type="radio" name="gender" value="Female" /> Female
            <input type="radio" name="gender" value="Prefer to not say" />{" "}
            Prefer to not say
          </div>
        </div>
        <div style={{ display: index === 4 ? "" : "none" }}>
          <h1>Part {index + 1}</h1>
          <select name="country" onChange={this.handleCountryChange}>
            <option selected value="unknown">
              your country
            </option>
            <option selected value="India">
              India
            </option>
            <option value="Japan">Japan</option>
            <option value="UK">UK</option>
            <option value="US">US</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <div style={{ display: index === 5 ? "" : "none" }}>
          <h1>Part {index + 1}</h1>
          <input
            type="date"
            name="birthDate"
            onChange={this.handleDateChange}
          />
        </div>
        <div style={{ display: index === 6 ? "" : "none" }}>
          <h1>Part {index + 1}</h1>
          <input
            type="checkbox"
            name="branch"
            id="branch"
            value={"computer"}
            onChange={this.handlebranch}
          />
          computer
          <input
            type="checkbox"
            name="branch"
            id="branch"
            value={"IT"}
            onChange={this.handlebranch}
          />
          IT
          <input
            type="checkbox"
            name="branch"
            id="branch"
            value={"Others"}
            onChange={this.handlebranch}
          />
          Others
        </div>
        <div>
          <button disabled={index === 6} onClick={this.onclick_next}>
            Next
          </button>
          <button disabled={index === 0} onClick={this.onclick_previous}>
            Previous
          </button>
        </div>
        <div>
          <h3>First name : {fname}</h3>
          <h3>Last name : {lname}</h3>
          <h3>Phone number : {phone}</h3>
          <h3>Gender : {gender}</h3>
          <h3>country : {country}</h3>
          <h3>date of birth : {date}</h3>
          <h3>Branch : {branch}</h3>
        </div>
      </div>
    );
  }
}
export default GoogleForm;

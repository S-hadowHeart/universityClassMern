import React, { Component } from "react";

export class ContactBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      fname: '',
      lname: '',
      phone: '',
      editId: null
    };
  }

  addContact = () => {
    const { fname, lname, phone, editId } = this.state;

    if (!fname.trim() || !lname.trim() || !phone.trim()) return;

    if (editId !== null) {
      this.setState((prevState) => ({
        contact: prevState.contact.map((y) =>
          y.id === editId ? { ...y, fname, lname, phone } : y
        ),
        fname: '',
        lname: '',
        phone: '',
        editId: null
      }));
      return;
    }

    const newcontact = {
      id: Date.now(),
      fname,
      lname,
      phone,
      visible: false
    };

    this.setState((prevState) => ({
      contact: [...prevState.contact, newcontact],
      fname: '',
      lname: '',
      phone: ''
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contact: prevState.contact.filter((y) => y.id !== id)
    }));
  };

  toggleDisplay = (id) => {
    this.setState((prevState) => ({
      contact: prevState.contact.map((y) =>
        y.id === id ? { ...y, visible: !y.visible } : y
      )
    }));
  };

  updateContact = (id) => {
    const selectedContact = this.state.contact.find((y) => y.id === id);

    this.setState({
      fname: selectedContact.fname,
      lname: selectedContact.lname,
      phone: selectedContact.phone,
      editId: id
    });
  };

  render() {
    const { contact, fname, lname, phone, editId } = this.state;

    return (
      <>
        <input
          type="text"
          value={fname}
          placeholder="first name"
          onChange={(e) => this.setState({ fname: e.target.value })}
        /><br />

        <input
          type="text"
          value={lname}
          placeholder="last name"
          onChange={(e) => this.setState({ lname: e.target.value })}
        /><br />

        <input
          type="text"
          value={phone}
          placeholder="mobile number"
          onChange={(e) => this.setState({ phone: e.target.value })}
        /><br />

        <button onClick={this.addContact}>
          {editId ? "update contact" : "add contact"}
        </button>

        <ul>
          {contact.map((y) => (
            <li key={y.id}>
              {y.fname}{" "}
              <button onClick={() => this.toggleDisplay(y.id)}>view</button>
              <button onClick={() => this.deleteContact(y.id)}>delete</button>
              <button onClick={() => this.updateContact(y.id)}>update</button>

              <div style={{ display: y.visible ? "block" : "none" }}>
                {y.lname} - {y.phone}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
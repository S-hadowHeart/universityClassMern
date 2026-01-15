import React, { Component } from "react";
import "./css/style.css"
class ContactBook extends Component {
    constructor(props) {
        super(props)
        this.state = { contacts: [], fname: "", lname: "", phone: "", editText: null };
    }

    hadleFnameChange = (e) => {
        this.setState({ fname: e.target.value })
    };

    hadleLnameChange = (e) => {
        this.setState({ lname: e.target.value })
    };
    hadlePhoneChange = (e) => {
        this.setState({ phone: e.target.value })
    };

    addToContacts = () => {
        const { fname, lname, phone, editText } = this.state;
        if (
            this.state.fname.trim() === "" ||
            this.state.lname.trim() === "" ||
            this.state.phone.trim() === ""

        )
            return;
        if (editText !== null) {
            this.setState((prevState) => ({
                contacts: prevState.contacts.map((y) =>
                    y.id === editText ? { ...y, fname, lname, phone } : y
                ),
                fname: '',
                lname: '',
                phone: '',
                editText: null
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
            contacts: [...prevState.contacts, newcontact],
            fname: '',
            lname: '',
            phone: ''
        }));


    }

    deleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((y) => y.id !== id)
        }));
    };

    updateContact = (id) => {
        const con = this.state.contacts.find((y) => y.id === id)

        this.setState({

            fname: con.fname,
            lname: con.lname,
            phone: con.phone,
            editId: id
        })
    }

    toggleDisplay = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.map((y) =>
                y.id === id ? { ...y, visible: !y.visible } : y
            ),
        }));


    };
    render() {
        const { contacts, fname, lname, phone } = this.state;
        return <>
            <input type="text" value={fname} placeholder="Enter First name" className="inputBox" onChange={this.hadleFnameChange} /> <br /><br />
            <input type="text" value={lname} placeholder="Enter last name" className="inputBox" onChange={this.hadleLnameChange} /> <br /><br />
            <input type="text" value={phone} placeholder="Enter phone number" className="inputBox" onChange={this.hadlePhoneChange} /> <br /><br />
            <button onClick={this.addToContacts}>Add Contact</button> <br /><br /><br />

            <ul >
                {contacts.map((y) =>
                    <li key= {y.id}>
                        <div className="txt">
                            {y.fname}{" "}
                            <button onClick={() => this.toggleDisplay(y.id)}>View</button>
                            <button onClick={() => this.deleteContact(y.id)}>Delete</button>
                            <button onClick={() => this.updateContact(y.id)}>update</button>
                        </div>
                        <div className="txt" style={{ display: y.visible ? "" : "none" }}>
                            {" "}
                            {y.lname} {"-"} {y.phone}
                        </div>
                    </li>
                )}
            </ul>

        </>

    }
}

export default ContactBook;
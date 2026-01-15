import React,{Component} from "react";
import "./css/login.css";

class RegistrationForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            name: "",
            email: "",
            passworld: "",
            confirmPassworld: "",
            gender: "",
            country: "",
            termsAccepted:false,
            
        };
    }

    handleNameChange = (e) =>
    {
        this.setState({name: e.target.value})
    };

    handleEmailChange = (e) =>
    {
        this.setState({email: e.target.value})
    };

    handlePassworldChange = (e) =>
    {
        this.setState({passworld: e.target.value});
    };
    handleConfirmPassworldChange = (e) =>
    {
        this.setState({confirmPassworld: e.target.value})
    };
    handleGenderChange = (e) =>
    {
        this.setState({gender: e.target.value})
    };
    handleCountryChange = (e) =>
    {
        this.setState({country: e.target.value})
    };
    handleTermsChange = (e) =>
    {
        this.setState({termsAccepted: e.target.checked})
    };
    handleDateChange = (e) =>
    {
        this.setState({date: e.target.value})
    }
    render()
    {
        const {
            name,
            email,
            passworld,
            confirmPassworld,
            gender,
            country,
            date,
            termsAccepted
        } = this.state;
        return(
            <>
                <div>
                    <h1 className="centerBtn">Register to our world</h1>
                </div>
                <table>
                    <tr>
                        <td>
                            <p className="mytxt">Name : </p>
                        </td>
                        <td>
                            <input type="text" placeholder="Enter your Name" onChange={this.handleNameChange} name="userName" id="userName" className="inputBox" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="mytxt">Email : </p>
                        </td>
                        <td>
                            <input type="email" name="mail" placeholder="Enter your Email" onChange={this.handleEmailChange} id="mail" className="inputBox" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="mytxt">Password: </p>
                        </td>
                        <td>
                            <input type="password" name="pass" placeholder="Enter your Passoword" onChange={this.handlePassworldChange} id="pass" className="inputBox" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="mytxt" placeholder="Enter your Confirm Passoword">Confirm Password</p>
                        </td>
                        <td>
                            <input type="password" name="confirmPass" placeholder="Enter Confirm Password" onChange={this.handleConfirmPassworldChange} id="confirmPass" className="inputBox" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="mytxt">Gender</p>
                        </td>
                        <td>
                            <div onChange={this.handleGenderChange} className="mytxt">
                            <input type="radio" name="gender" value="Male" /> Male 
                            <input type="radio" name="gender" value="Female" /> Female
                            <input type="radio" name="gender" value="Prefer to not say" /> Prefer to not say
                            </div>
                               
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="mytxt">Date of Birthday: </p>
                        </td>
                        <td>
                            <input type="date" name="birthDate"  onChange={this.handleDateChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="mytxt">Country</p>
                        </td>
                        <td>
                            <select name="country" onChange={this.handleCountryChange}>
                                <option selected value="unknown">your country</option>
                                <option selected value="India">India</option>
                                <option value="Japan">Japan</option>
                                <option value="UK">UK</option>
                                <option value="US">US</option>
                                <option value="Canada">Canada</option>
                            </select>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <div className="mytxt">
                            <input type="checkbox" name="terms" id="terms" onChange={this.handleTermsChange} />    
                            Terms and Conditions
                            </div>
                        </td>
                    </tr>
                </table>
                 <div className="centerBtn">
                        <button id="btn" type="submit" >Submit</button>
                 </div>
                <p>---------------------------------------------------------------------------------------------------</p>
                <p className="mytxt">
                    {name} <br></br>
                    {email} <br></br>
                    {gender} <br></br>
                    {date} <br></br>
                    {country} <br></br>
                    {termsAccepted? "Yes":"No"}
                </p>
            </>
        )
    }
}

export default RegistrationForm;

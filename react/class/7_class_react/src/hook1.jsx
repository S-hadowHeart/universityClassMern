// create a registration form with following details
//  1. name
//  2 email
//  3 password
//  4 confirm password
//  5 gender 
//  6 country
//  7 term ansd conditions
//  8 color picker
//  9 DOB
//  10 Submit Button

import React, { Component, useState } from "react";
// import { useState } from "react";


export function GoogleForm() {
    const passError = "Invalid Password";
    const [name , setName] = useState("");
    const [mail , setMail] = useState("");
    const [password , setPassword] = useState("");
    const [cPassword , setCPassword] = useState("");
    const [gender , setGender] = useState("");
    const [country , setCountry] = useState("");
    const [term , setTerm] = useState("");
    const [color , setColor] = useState("#0000")
    const [DOB , setDOB] = useState("")
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="userName">Name: </label>
              </td>
              <td>
                <input type="text" value={name} name="userName" onChange={(e) => e.target.value} />
              </td>
              <td>
                <label htmlFor="userName" hidden className="errorMsg">
                  Name is Required
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="userMail">Mail Address: </label>
              </td>
              <td>
                <input type="email" value={mail} name="userMail" />
              </td>
              <td>
                <label htmlFor="userMail" className="errorMsg" hidden>
                  Mail is invalid
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="userPass">Passworld</label>
              </td>
              <td>
                <input type="password" value={password} name="userPass" />
              </td>
              <td>
                <label htmlFor="userPass" className="errorMsg" hidden>
                  {passError}
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="userCPass">Confirm Password</label>
              </td>
              <td>
                <input type="password" value={cPassword} name="userCPass" />
              </td>
              <td>
                <label htmlFor="userCPass" className="errorMsg" hidden>
                  {passError}
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="userGender">Gender: </label>
              </td>
              <td>
                <div className="mytxt" >
                  <input type="radio" name="gender" value="Male" /> Male
                  <input type="radio" name="gender" value="Female" /> Female
                  <input
                    type="radio"
                    name="gender"
                    value="Prefer to not say"
                  />{" "}
                  Prefer to not say
                </div>
              </td>
              <td>
                <label htmlFor="userGender" className="errorMsg" hidden>
                  Gender is Required
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="userCountry" >Country: </label>
              </td>
              <td>
                <select name="UserCountry">
                  <option defaultValue="unknown">your country</option>
                  <option value="India">India</option>
                  <option value="Japan">Japan</option>
                  <option value="UK">UK</option>
                  <option value="US">US</option>
                  <option value="Canada">Canada</option>
                </select>
              </td>
              <td>
                <label htmlFor="userCountry" className="errorMsg" hidden>
                  please select your country
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="userDOB">Date of Birth : </label>
              </td>
              <td>
                <input type="datetime" value={DOB} name="userDOB" />
              </td>
              <td>
                <label htmlFor="userDOB" className="errorMsg" hidden>
                  Please Enter Valid Date of Birth
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" value={term} name="userTermCheck" />
              </td>
              <td>
                <label htmlFor="userTermCheck">
                  Accept all Terms and Condition
                </label>
              </td>
              <td>
                <label htmlFor="userTermCheck" className="errorMsg" hidden>
                  Please Read and Accecpt Contion
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="userFavColour"> Your Fav Colour: </label>
              </td>
              <td>
                <input type="color" value={color} name="userFavColour" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="" name="userSubmit" />
                Submit
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}


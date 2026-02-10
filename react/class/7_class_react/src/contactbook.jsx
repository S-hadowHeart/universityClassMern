import React , { useState } from 'react';
 
export default function ContactBookHook()
    {
        const [contacts,setContacts] = useState([]);
        const [fname, setFname] = useState("");
        const [lname, setlname] = useState("");
        const [phone, setPhone] = useState("");

        const onClickAddContact = () => {
            if (fname.trim() === "" || lname.trim() === "" || phone.trim() === "")
                return
            const newcontact = {
                id: Date.now(),
                fname: fname,
                lname : lname,
                phone : phone,
                visible : false
            }
            setContacts([...contacts,newcontact]);
            setFname("");
            setlname("");
            setPhone("")

        };

        const ToggleView = (id) => {
            const updatedContacts = contacts.map((y) => {
                if(y.id === id){
                    return {...y,visible:!y.visible};
                }
                return y
            });
            setContacts(updatedContacts);
        }

        return (
          <>
            <input
              type="text"
              value="{fname}"
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              value="{lname}"
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              value="{phone}"
              onChange={(e) => setFname(e.target.value)}
            />

            <button type="submit" value="" onClick={onClickAddContact}> Add </button> 
            <ul>
                {contacts.map((y) }
                    
                    <li> key={y.id}</li>
                    {y.fname} <button></button>
                    {y.visible}

                ))
            </ul>

          </>
        );

    }
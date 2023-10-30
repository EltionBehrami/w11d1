import { useState } from "react";


function Form() {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState(""); 
    // const [phone, setPhone] = useState(""); 
    // const [phoneType, setPhoneType] = useState(""); 
    // const [staff, setStaff] = useState("");
    // const [bio, setBio] = useState(""); 
    // const [signUp, setSignUp] = useState("");

    const [user, setUser] = useState({
        name: "",
        email:"",
        phone:"",
        phoneType:"",
        staff:"",
        bio:"",
        signUp:""
    });


    return (
        <div>
            <h1>Sign Up</h1>

            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        id='name'
                        type="text" 
                        value={user.name}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        id='email'
                        type="text" 
                        value={user.email}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input 
                        id='phone'
                        type="text" 
                        value={user.phone}/>
                </div>
                <div>
                    <label htmlFor="phoneType">PhoneType:</label>
                    <select 
                        id='phoneType'
                        value={user.phoneType}>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="staff">Staff:</label>
                    <input 
                        name='staff'
                        type="radio" 
                        value="instructor"/>
                    <input 
                        name='staff'
                        type="radio" 
                        value="student"/>
                </div>
            </form>
        </div>
    )
    

}

export default Form;